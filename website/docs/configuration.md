---
title: Configuration
---

## Configuring the server

### Command line options

Run `waved -help` to view all available command line options:

```
$ ./waved -help
Usage of ./waved:
  -access-key-id string
        default API access key ID (default "access_key_id")
  -access-key-secret string
        default API access key secret (default "access_key_secret")
  -access-keychain string
        path to file containing API access keys (default ".wave-keychain")
  -compact string
        compact AOF log
  -create-access-key
        generate and add a new API access key ID and secret pair to the keychain
  -data-dir string
        directory to store site data (default "./data")
  -debug
        enable debug mode (profiling, inspection, etc.)
  -editable
        allow users to edit web pages
  -http-headers-file string
        path to a MIME-formatted file containing additional HTTP headers to add to responses from the server
  -init string
        initialize site content from AOF log
  -list-access-keys
        list all the access key IDs in the keychain
  -listen string
        listen on this address (default ":10101")
  -max-cache-request-size string
        maximum allowed size of HTTP requests to the server cache (e.g. 5M or 5MB or 5MiB) (default "5M")
  -max-proxy-request-size string
        maximum allowed size of proxied HTTP requests (e.g. 5M or 5MB or 5MiB) (default "5M")
  -max-proxy-response-size string
        maximum allowed size of proxied HTTP responses (e.g. 5M or 5MB or 5MiB) (default "5M")
  -max-request-size string
        maximum allowed size of HTTP requests to the server (e.g. 5M or 5MB or 5MiB) (default "5M")
  -no-store
        disable storage (scripts and multicast/broadcast apps will not work)
  -no-log
        disable AOF logging (connect/disconnect and diagnostic logging messages are not disabled)
  -oidc-client-id string
        OIDC client ID
  -oidc-client-secret string
        OIDC client secret
  -oidc-end-session-url string
        OIDC end session URL
  -oidc-provider-url string
        OIDC provider URL
  -oidc-redirect-url string
        OIDC redirect URL
  -oidc-skip-login
        don't show the login form during OIDC authorization
  -private-dir value
        additional directory to serve files from (authenticated users only), in the format "[url-path]:[filesystem-path]", e.g. "/public/files/:/some/local/path" will host /some/local/path/foo.txt at /public/files/foo.txt; multiple directory mappings allowed
  -proxy
        enable HTTP proxy (for IDE / language server support only - not recommended for internet-facing websites)
  -public-dir value
        additional directory to serve files from, in the format "[url-path]:[filesystem-path]", e.g. "/public/files/:/some/local/path" will host /some/local/path/foo.txt at /public/files/foo.txt; multiple directory mappings allowed
  -remove-access-key string
        remove the specified API access key ID from the keychain
  -tls-cert-file string
        path to certificate file (TLS only)
  -tls-key-file string
        path to private key file (TLS only)
  -version
        print version and exit
  -web-dir string
        directory to serve web assets from (default "./www")
```
### Environment variables

Almost all of the command line arguments listed above can be set using environment variables (with the exception of actions like `-version`, `-create-access-key`, `-list-access-key`, etc.).

```
H2O_WAVE_ACCESS_KEY_ID
H2O_WAVE_ACCESS_KEY_SECRET
H2O_WAVE_ACCESS_KEYCHAIN
H2O_WAVE_DATA_DIR
H2O_WAVE_DEBUG [1]
H2O_WAVE_EDITABLE [1]
H2O_WAVE_HTTP_HEADERS_FILE
H2O_WAVE_INIT
H2O_WAVE_LISTEN
H2O_WAVE_MAX_CACHE_REQUEST_SIZE
H2O_WAVE_MAX_PROXY_REQUEST_SIZE
H2O_WAVE_MAX_PROXY_RESPONSE_SIZE
H2O_WAVE_MAX_REQUEST_SIZE
H2O_WAVE_NO_STORE
H2O_WAVE_NO_LOG
H2O_WAVE_OIDC_CLIENT_ID
H2O_WAVE_OIDC_CLIENT_SECRET
H2O_WAVE_OIDC_END_SESSION_URL
H2O_WAVE_OIDC_PROVIDER_URL
H2O_WAVE_OIDC_REDIRECT_URL
H2O_WAVE_OIDC_SCOPES
H2O_WAVE_OIDC_SKIP_LOGIN [1]
H2O_WAVE_PROXY [1]
H2O_WAVE_PUBLIC_DIR [2]
H2O_WAVE_PRIVATE_DIR [2]
H2O_WAVE_TLS_CERT_FILE
H2O_WAVE_TLS_KEY_FILE
H2O_WAVE_WEB_DIR
```

Notes:
- [1] `1`, `t`, `true` to enable; `0`, `f`, `false` to disable (case insensitive).
- [2] Use OS-specific path list separator to specify multiple arguments - `:` for Linux/OSX and `;` for Windows. For example, `H2O_WAVE_PUBLIC_DIR=/images/@./files/images:/downloads/@./files/downloads`.

## Configuring your app

Your Wave application is an ASGI server. When you run your app during development, the app server runs at http://127.0.0.1:8000/ by default (localhost, port 8000), and assumes that your Wave server is running at http://127.0.0.1:10101/ (localhost, port 10101). The `wave run` command automatically picks another available port if `8000` is not available.

The Wave server and apps communicate with each other using RPC over persistent HTTP connections.

For production deployments, you'll want to configure which port your app listens to, how it can access the Wave server, and how the Wave server can access your app.

You can use the following environment variables to configure your app's server's behavior:

### H2O_WAVE_APP_ADDRESS
The public host/port of the app server. Defaults to `http://127.0.0.1:8000`. Set this variable if you are running your Wave server and your app on different machines or containers.

### H2O_WAVE_APP_MODE
The [realtime sync mode](realtime.md) of the app server. One of `unicast` (default), `multicast`, or `broadcast`.

### H2O_WAVE_ADDRESS
The public host/port of the Wave server. Defaults to `http://127.0.0.1:10101`. Set this variable if you are running the Wave server on a remote machine or container.

### H2O_WAVE_CONNECTION_TIMEOUT
The number of seconds to attempt to connect to the Wave server before giving up.

### H2O_WAVE_ACCESS_KEY_ID
The API access key ID to use when communicating with the Wave server.

### H2O_WAVE_ACCESS_KEY_SECRET
The API access key secret to use when communicating with the Wave server.

### H2O_WAVE_APP_ACCESS_KEY_ID
The API access key ID to use when communicating with the app server. Automatically generated if not specfied.

### H2O_WAVE_APP_ACCESS_KEY_SECRET
The API access key secret to use when communicating with the app server. Automatically generated if not specified.

### H2O_WAVE_INTERNAL_ADDRESS

:::caution Deprecated
This environment variable will be removed in v1.0.
:::

The local host/port on which the app server should listen. Defaults to `http://127.0.0.1:8000`. For example, if you want your app to listen on a specific port, execute your app as follows (replace `66666` with a port number of your choice):
```
$ H2O_WAVE_INTERNAL_ADDRESS=ws://127.0.0.1:66666 ./venv/bin/python my_app.py
```


### H2O_WAVE_EXTERNAL_ADDRESS

:::caution Deprecated
Specify `H2O_WAVE_APP_ADDRESS` instead.
:::

The public host/port of the app server. Defaults to `http://127.0.0.1:8000`. Set this variable if you are running your Wave server and your app on different machines or containers.

### H2O_WAVE_CHECKPOINT_DIR
The directory to save/load application and session state. Enables checkpointing. If set, the app saves the contents of `q.app` and `q.user` before exiting. When restarted, the contents of `q.app` and `q.user` are restored. The directory is automatically created if it does not exist.

You can use checkpointing as a simple way to save/load your app's data while prototyping.

The checkpoint file is named `h2o_wave.checkpoint`, and is serialized using Python's [pickle](https://docs.python.org/3/library/pickle.html) protocol. Due to the nature of the `pickle` format, checkpointing is only guaranteed to work if the Python version and the versions of your app's dependencies are a perfect match, down to the patch version. In other words, do not expect checkpointing to work if an app is restarted using a newer/older Python version or a newer/older package. If you use checkpointing, it is recommended that you explicitly use `==` to set the `major.minor.patch` version of every package in your app's `requirements.txt` or `setup.py`.

### H2O_WAVE_NO_AUTOSTART
Disable/enable Wave server boot during `wave run`. Defaults to `false`. Available values: `1`, `t`, `true` to disable autostart; `0`, `f`, `false` to enable autostart (case insensitive). Same as calling `wave run --no-autostart`.

## Web Analytics

You can configure your app's web pages to send basic usage information to a third-party web analytics or tracking site. This lets you measure and analyze how users are interacting with various parts of your app.

By default, Wave apps do not load any third-party trackers or capture usage data. Third-party trackers have to be enabled explicitly by the application's author, and are loaded on-demand.

Once enabled, your app's UI will send events every time the user performs some kind of action that triggers a request from the browser to your app. Only two kinds of information are sent to the third-party trackers:

- The names of the elements that were possibly interacted with (and not values). For example, if a button named `foo` was clicked on, the value `foo=true` is tracked.
- The hash part of the URL, if any. For example if the page `/foo/bar` was navigated to, the value `#=/foo/bar` is tracked.

### Google Analytics

To enable usage tracking via Google Analytics, create and set a `ui.tracker()` on your page's meta card, with the `id` set to the measurement ID of your web property.

```py {2}
q.page['meta'] = ui.meta_card('',
    tracker=ui.tracker(type=ui.TrackerType.GA, id='G-XXXXXXXXXX')
)
```
