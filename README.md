# Ruby.wasm quickstart - WASI GEM Example
## for the rest of us

This is a standalone version with all the extra files that are necessary to run ruby.wasm with javascript browser support. In the current ruby.wasm repository the files are available, but it is not obvious that the js gem is not included in ruby-3.3-wasm32-unknown-wasi-full.tar.gz.

##

## how to build (with compiling)

you will need
- gcc and others 
- rust
- cargo

```shell
git clone --recurse-submodules -j8 https://github.com/Largo/ruby.wasm-quickstart.git
cd ruby.wasm-quickstart
./build.sh
ruby -run -e httpd . -p 8080
```
## Example
- [Demo Page](https://largo.github.io/ruby.wasm-quickstart) [index.html](https://github.com/Largo/ruby.wasm-quickstart/blob/main/index.html)
- [Ruby Code Runner in Browser](https://largo.github.io/ruby.wasm-quickstart/run-code.html) [run-code.html](https://github.com/Largo/ruby.wasm-quickstart/blob/main/run-code.html) [runCode.rb](https://github.com/Largo/ruby.wasm-quickstart/blob/main/runCode.rb)
- [Including Ruby files via require_relative](https://largo.github.io/ruby.wasm-quickstart/require.html) [require.html](https://github.com/Largo/ruby.wasm-quickstart/blob/main/require.html) [main.rb](https://github.com/Largo/ruby.wasm-quickstart/blob/main/require/main.rb) [second.rb](https://github.com/Largo/ruby.wasm-quickstart/blob/main/require/second.rb)

## Notices
- If you want to add something to your gemfile, you will need to recompile the wasm file (1 second).
- You can add ruby files into ruby-app.wasm by changing the command. for instance a src directory. 
-  bundle exec rbwasm --dir ./src::/src --log-level debug build --ruby-version 3.3 --target wasm32-unknown-wasi --build-profile full  -o ruby-app.wasm 
-  If you want to load ruby files via the network, use run-code.html as a template. You can add require_relative after the module block to load any files. I will provide a simpler example later.
- see releases for prebuilt ruby-app.wasm

## Todo
- [x] explain how to add  code outside gems to the image
- [ ] show how to shrink/compress the ruby.wasm file (currently 51MB with debug info, but can be about 10mb or less.)
- [ ] license + explanation
- [ ] ask upstream if they can make a javascript file that doesnt have the .wasm file path hardcoded. 
- [ ] docker file
- [x] upload release
- [x] figure out how to get better errormessages in the console (which JS:Object)
- [x] Cast some values automatically to numbers
- [x] github website with example


## References
- [ruby.wasm](https://github.com/ruby/ruby.wasm)
- [Based on work by Yuta Saito et al](https://github.com/kateinoigakukun)
- [See: Support RubyGems / Bundler #358 ](https://github.com/ruby/ruby.wasm/pull/358)
- [JS Gem](https://github.com/ruby/ruby.wasm/tree/main/packages/gems/js)
- [JavaScript Files](https://github.com/ruby/ruby.wasm/tree/main/packages/npm-packages/ruby-3.3-wasm-wasi)
- [ruby.wasmでブラウザを酷使してみよう / 2023-MatsueRubyKaigi - Speaker Deck](https://speakerdeck.com/lnit/ruby-wasm-2023-matsuerubykaigi?slide=66)
- [ブラウザでRubyを動かす夢 - まめめも](https://mametter.hatenablog.com/entry/2024/02/01/105413)
- [ruby.wasmでrequire_relativeを使えるようにしたい #Ruby - Qiita](https://qiita.com/ledsun/items/3f8ba1ee2699d546c18c#fetch%E3%81%8C%E9%9D%9E%E5%90%8C%E6%9C%9F%E9%96%A2%E6%95%B0)
- [RubyでWebAssemblyを試してみよう #ruby #WebAssembly #WASM #WASI - クリエーションライン株式会社](https://www.creationline.com/tech-blog/60328)
- [how_to_use_bundler_and_rubygems_on_wasm.md](https://gist.github.com/kateinoigakukun/5caf3b83b2732b1653e91b0e75ce3390)
- see contributing.md in ruby.wasm repo

## GPT to convert JavaScript to Ruby code:

[ChatGPT - Ruby.wasm JavaScript Helper](https://chat.openai.com/g/g-BrA8GwiLU-ruby-wasm-javascript-helper)