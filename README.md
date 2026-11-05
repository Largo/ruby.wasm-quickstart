# Ruby.wasm quickstart - WASI GEM Example

## For the rest of us

Ruby.wasm lets you run the Ruby Programming Language in the Browser using Webassembly.
This project makes it easier to get started: it ships a ready-made `ruby-app.wasm`
(Ruby 4.0 with the standard library and the JavaScript bridge) that already contains
the gems from `wasm-gems/Gemfile`. You can add your own pure-Ruby gems from RubyGems
or load Ruby files from your website.

Uses the official [ruby.wasm](https://github.com/ruby/ruby.wasm) 2.10 release (Ruby 4.0).

## Example
- [Demo Page](https://largo.github.io/ruby.wasm-quickstart) [index.html](https://github.com/Largo/ruby.wasm-quickstart/blob/main/index.html)
- [Ruby Code Runner in Browser](https://largo.github.io/ruby.wasm-quickstart/run-code.html) [run-code.html](https://github.com/Largo/ruby.wasm-quickstart/blob/main/run-code.html) [runCode.rb](https://github.com/Largo/ruby.wasm-quickstart/blob/main/runCode.rb)
- [Including Ruby files via require_relative](https://largo.github.io/ruby.wasm-quickstart/require.html) [require.html](https://github.com/Largo/ruby.wasm-quickstart/blob/main/require.html) [main.rb](https://github.com/Largo/ruby.wasm-quickstart/blob/main/require/main.rb) [second.rb](https://github.com/Largo/ruby.wasm-quickstart/blob/main/require/second.rb)
- [Shopping list with localStorage](https://largo.github.io/ruby.wasm-quickstart/shoppingList.html), [Canvas](https://largo.github.io/ruby.wasm-quickstart/canvas.html), [Heartbeat animation](https://largo.github.io/ruby.wasm-quickstart/heartbeat.html), [Markdown with the kramdown gem](https://largo.github.io/ruby.wasm-quickstart/kramdown.html)

## Run it

`ruby-app.wasm` is committed, so you only need a static web server:

```shell
git clone https://github.com/Largo/ruby.wasm-quickstart.git
cd ruby.wasm-quickstart
./serve.sh        # or: python -m http.server 8080
```

Then open http://localhost:8080.

## Add gems (rebuild ruby-app.wasm)

No C compiler, Rust or wasi-sdk needed - only Ruby, Bundler and curl. Works on Linux, macOS and Windows (Git Bash).

1. Add pure-Ruby gems to `wasm-gems/Gemfile`.
2. Run `./build.sh`. It downloads the official Ruby 4.0 build once, installs the gems into `wasm-gems/bundle` and packs that folder into `ruby-app.wasm` at `/gems`.
3. In your Ruby code: `require "/gems/setup"` and then `require` your gems as usual (see [index.html](index.html)).

Gems with C extensions need a full `rbwasm build` instead (Linux/macOS, see the ruby.wasm docs).

## Writing Ruby for the browser (jsg)

The demos use [jsg](https://github.com/Largo/jsg), which is packed into `ruby-app.wasm`.
It lets you write JavaScript properties like Ruby attributes and converts values to Ruby:

```ruby
require "/gems/setup"
require "jsg"

document = JS.global.document              # properties read like methods
div = document.createElement("div")
div.innerText = "Hello from Ruby"          # and are set like attributes
document.body.appendChild(div)

canvas.width / 2                           # JS numbers come back as Float
input.value.strip                          # JS strings as String
checkbox.checked                           # true / false
element.hidden?                            # JavaScript truthiness as true / false
JS.global.fetch("README.md").await         # await needs <script data-eval="async">
```

Without jsg, the plain js gem 2.10 needs `JS.global[:document]`, `div[:innerText] = ...`
and explicit `.to_i` / `.to_s` conversions.

## Notices
- `browser.script.iife.js` is the official loader from `@ruby/4.0-wasm-wasi` 2.10.1, changed in one place: it loads `ruby-app.wasm` instead of the CDN build. Use another file with `<script src="browser.script.iife.js" data-wasm="other.wasm">`.
- jsg is unpacked into `wasm-gems/vendor` by `build.sh` instead of going through the Gemfile, because its gemspec depends on `ruby_wasm` (for the `jsg` command), which must not end up in the browser.
- To load Ruby files over the network, see [require/main.rb](require/main.rb). The js gem now also ships `require "js/require_remote/relative_shim"`.

## Todo
- [x] explain how to add  code outside gems to the image
- [X] ~~show how to shrink/compress the ruby.wasm file (currently 51MB with debug info, but can be about 10mb or less.)~~
- [ ] license + explanation
- [x] wasm file path no longer hardcoded (`data-wasm` attribute)
- [x] build without compiling (`rbwasm pack` onto the official build)
- [x] upload release
- [x] figure out how to get better errormessages in the console (which JS:Object)
- [x] Cast some values automatically to numbers
- [x] github website with example


## References
- [ruby.wasm](https://github.com/ruby/ruby.wasm)
- [Based on work by Yuta Saito et al](https://github.com/kateinoigakukun)
- [emirb - irb on ruby-wasm-emscripten + xterm-pty](https://mame.github.io/emirb/?utm_source=shortruby&ref=shortruby.com)
- [irb.wasm](https://irb-wasm.vercel.app/)
- [Largo/irb.wasm: IRB on browser powered by WebAssembly Browser + new JS Gem](https://github.com/Largo/irb.wasm)
- [See: Support RubyGems / Bundler #358 ](https://github.com/ruby/ruby.wasm/pull/358)
- [JS Gem](https://github.com/ruby/ruby.wasm/tree/main/packages/gems/js)
- [JavaScript Files](https://github.com/ruby/ruby.wasm/tree/main/packages/npm-packages/ruby-wasm-wasi)
- [ruby.wasmでブラウザを酷使してみよう / 2023-MatsueRubyKaigi - Speaker Deck](https://speakerdeck.com/lnit/ruby-wasm-2023-matsuerubykaigi?slide=66)
- [ブラウザでRubyを動かす夢 - まめめも](https://mametter.hatenablog.com/entry/2024/02/01/105413)
- [ruby.wasmでrequire_relativeを使えるようにしたい #Ruby - Qiita](https://qiita.com/ledsun/items/3f8ba1ee2699d546c18c#fetch%E3%81%8C%E9%9D%9E%E5%90%8C%E6%9C%9F%E9%96%A2%E6%95%B0)
- [RubyでWebAssemblyを試してみよう #ruby #WebAssembly #WASM #WASI - クリエーションライン株式会社](https://www.creationline.com/tech-blog/60328)
- [how_to_use_bundler_and_rubygems_on_wasm.md](https://gist.github.com/kateinoigakukun/5caf3b83b2732b1653e91b0e75ce3390)
- [TODO: Shrinking .wasm Size](https://rustwasm.github.io/docs/book/reference/code-size.html)
- see contributing.md in ruby.wasm repo

## GPT to convert JavaScript to Ruby code:

[ChatGPT - Ruby.wasm JavaScript Helper](https://chat.openai.com/g/g-BrA8GwiLU-ruby-wasm-javascript-helper)