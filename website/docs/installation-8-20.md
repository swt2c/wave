---
title: Installation v0.19 or older
---

:::important
For v0.20 or later versions, [click here](installation.md).
:::

To set up H2O Wave, simply download and extract a release (~10MB). The release ships with a precompiled binary executable, so no explicit installation step is necessary.

## Prerequisites

H2O Wave runs on Linux, macOS, and Windows, having Python 3.6+.

## Setup

### Step 1: Download

Download the H2O Wave SDK for your platform from Github:
[https://github.com/h2oai/wave/releases/latest](https://github.com/h2oai/wave/releases/latest)

### Step 2: Extract

Extract your download.

```shell
tar -xzf wave-x.y.z-linux-amd64.tar.gz
```

### Step 3: Move

Move it to a convenient location, say `$HOME/wave/`.

```shell
 mv wave-x.y.z-linux-amd64 $HOME/wave
```

:::note
If you have a previous version of Wave installed, be sure to remove it before installing another. To remove it, simply delete the previous directory.
:::

Inspect your `$HOME/wave` directory. You should see the following content:

```
.
├── examples/       ... Examples
├── test/           ... Browser testing framework
├── www/            ... Wave server web root (do not modify!)
└── waved           ... Wave server executable
```

### Step 4: Run

Go to your Wave directory.

```shell
cd $HOME/wave
```

Start the Wave server.

```shell
./waved
```

```
2020/10/27 16:16:34 # 
2020/10/27 16:16:34 # ┌─────────────────────────┐
2020/10/27 16:16:34 # │  ┌    ┌ ┌──┐ ┌  ┌ ┌──┐  │ H2O Wave
2020/10/27 16:16:34 # │  │ ┌──┘ │──│ │  │ └┐    │ (version) (build)
2020/10/27 16:16:34 # │  └─┘    ┘  ┘ └──┘  └─┘  │ © 2020 H2O.ai, Inc.
2020/10/27 16:16:34 # └─────────────────────────┘
2020/10/27 16:16:34 # 
2020/10/27 16:16:34 # {"address":":10101","t":"listen","webroot":"/home/elp/wave/www"}
```

:::info
On Windows, run `waved.exe` to start the server.
:::

### Step 5: Verify

Finally, point your web browser to [http://localhost:10101/](http://localhost:10101/). You should see an empty page with a blinker that looks like this:

![blinker](assets/installation__waiting.gif)

Congratulations! Wave is now running, but doesn't have any content yet (hence the spinner).

In the next few sections, we'll add some content and see what the fuss is all about.


## Run the tour

import StartQ from './_start_q.md'

Your Wave release download ships with over 200 examples.

You can play around with these examples in your browser using `tour.py`, a Python script (itself a Wave app) located in `examples/`:

```none title="Contents of $HOME/wave"
wave/
├── examples/       <-- Examples live here.
|   └── tour.py     <-- The Wave Tour.
├── test/           
├── www/            
└── waved
```

To run the tour, as with any Wave app, we need to start both the Wave server (`waved`) and the tour (`tour.py`). Let's go ahead and do that.

### Step 1: Start the Wave server

<StartQ/>

### Step 2: Run the tour

First, create a [virtual environment](https://docs.python.org/3/tutorial/venv.html), install the tour's dependencies.

:::important
Do this from a new terminal window!
:::

```shell
cd $HOME/wave
python3 -m venv venv
source venv/bin/activate
pip install -r examples/requirements.txt
```

On Windows:

```shell
cd $HOME\wave
python3 -m venv venv
venv\Scripts\activate.bat
pip install -r examples\requirements.txt
```

Finally, run the tour:

```shell
wave run --no-reload examples.tour
```

### Step 3: Enjoy the tour

Go to [http://localhost:10101/tour](http://localhost:10101/tour) to access the tour.

![tour](assets/tour__tour.png)

`tour.py` is an ordinary Wave app that runs other apps. The tour itself runs at the route `/tour`, and each of the examples runs at `/demo`.

:::tip
To play with the tour's active example in isolation, simply open a new browser tab and head to [http://localhost:10101/demo](http://localhost:10101/demo).
:::

## Wrapping up

In this section, we started the Wave server and then launched `tour.py` to experience the tour. In general, this is how you'd typically launch any app, including your own. There is nothing special about `tour.py`. In fact, to run any example, all you need to do is repeat the steps above in a new terminal window. For example, to run `todo.py`, simply run:

```shell
wave run examples.todo
```

You can now access the example at [http://localhost:10101/demo](http://localhost:10101/demo). Simple!
