// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Model, Rec, S, U, unpack } from 'h2o-wave'
import MarkdownIt from 'markdown-it'
import Renderer from 'markdown-it/lib/renderer'
import Token from 'markdown-it/lib/token'
import React from 'react'
import { stylesheet } from 'typestyle'
import { cards, grid, substitute } from './layout'
import { border, clas, cssVar, padding, pc } from './theme'
import { bond } from './ui'

const
  css = stylesheet({
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: grid.gap,
    },
    body: {
      flexGrow: 1,
    },
    markdown: {
      $nest: {
        '>*:only-child': {
          margin: 0
        },
        a: {
          color: cssVar('$themePrimary'),
          $nest: {
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
        table: {
          width: pc(100),
          borderCollapse: 'collapse',
        },
        tr: {
          borderBottom: border(1, cssVar('$text5')),
        },
        th: {
          padding: padding(11, 6),
          textAlign: 'left',
        },
        td: {
          padding: padding(11, 6),
        },
        img: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
    },
  })

export const
  markdown = MarkdownIt({ html: true, linkify: true, typographer: true, }),
  Markdown = ({ source }: { source: S }) => <div className={clas(css.markdown, 'wave-markdown')} dangerouslySetInnerHTML={{ __html: markdown.render(source) }} />

const defaultRenderer = markdown.renderer.rules.text
markdown.renderer.rules.text = (tokens: Token[], idx: U, options: MarkdownIt.Options, env: any, self: Renderer) => {
  const
    linkOpenToken = tokens[idx + 1],
    hrefAttr = linkOpenToken?.attrGet('href')

  // Onclick has to be inlined otherwise a global function would be needed. Custom event is handled at App.tsx. Return false prevents navigation behavior.
  if (hrefAttr?.startsWith('?')) linkOpenToken.attrPush(['onclick', `window.dispatchEvent(new CustomEvent("md-link-click", {detail:"${hrefAttr.substring(1)}" }));return false`])
  return defaultRenderer!(tokens, idx, options, env, self)
}

/**
 * Create a card that renders Markdown content.
 *
 * Github-flavored markdown is supported.
 * HTML markup is allowed in markdown content.
 * URLs, if found, are displayed as hyperlinks.
 * Copyright, reserved, trademark, quotes, etc. are replaced with language-neutral symbols.
 * :icon "InsertTextBox"
 */
interface State {
  /**
   * The title for this card.
   * :t "textbox"
   * :value "Untitled Content"
   **/
  title: S
  /**
   * The markdown content. Supports Github Flavored Markdown (GFM): https://guides.github.com/features/mastering-markdown/
   * :t "textarea"
   * :value "Hello, World!"
   **/
  content: S
  /**
   * Additional data for the card.
   **/
  data?: Rec
}

export const
  View = bond(({ name, state, changed }: Model<State>) => {
    const
      render = () => {
        const
          data = unpack<Rec>(state.data),
          title = substitute(state.title, data)
        return (
          <div data-test={name} className={css.card}>
            {title && <div className='wave-s12 wave-w6'>{title}</div>}
            <div className={css.body}>
              <Markdown source={substitute(state.content, data)} />
            </div>
          </div>
        )
      }
    return { render, changed }
  })

cards.register('markdown', View)