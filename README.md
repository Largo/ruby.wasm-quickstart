# Ruby.wasm quickstart - WASI GEM Example
## for the rest of us

This is a standalone version with all the extra files that are necessary to run ruby.wasm with javascript browser support. In the current ruby.wasm repository the files are available, but it is not obvious that the js gem is not included in ruby-3.3-wasm32-unknown-wasi-full.tar.gz.

# how to build (with compiling)

you will need
- gcc and others 
- rust
- cargo

```shell
git clone --recurse-submodules -j8 git://github.com/largo/ruby.wasm-quickstart.git
cd ruby.wasm-quickstart
cd ruby.wasm
./bin/setup
# Compile extension library
bundle exec rake compile
rake install
cd ..
bundle exec rbwasm --log-level debug build --ruby-version 3.3 --target wasm32-unknown-wasi --build-profile full  -o ruby-app.wasm
ruby -run -e httpd . -p 8080
```

# notices
- If you want to add something to your gemfile, you will need to recompile the wasm file (1 second)

# todo
- [ ] explain how to add  code outside gems to the image
- [ ] show how to shrink/compress the ruby.wasm file (currently 51MB with debug info, but can be about 10mb or less.)
- [ ] license + explanation
- [ ] ask upstream if they can make a javascript file that doesnt have the .wasm file path hardcoded. 
- [ ] docker file
- [ ] upload release
- [ ] figure out how to get better errormessages in the console (which JS:Object)
- [ ] Cast some values automatically to numbers
- [ ] github website with example

# references

- [ruby.wasm](https://github.com/ruby/ruby.wasm)
- [Based on work by Yuta Saito et al](https://github.com/kateinoigakukun)
- [See: Support RubyGems / Bundler #358 ](https://github.com/ruby/ruby.wasm/pull/358)
- [JS Gem](https://github.com/ruby/ruby.wasm/tree/main/packages/gems/js)
- [JavaScript Files](https://github.com/ruby/ruby.wasm/tree/main/packages/npm-packages/ruby-3.3-wasm-wasi)
- see contributing.md in ruby.wasm repo

## GPT to convert JavaScript to Ruby code:

[ChatGPT - Ruby.wasm JavaScript Helper](https://chat.openai.com/g/g-BrA8GwiLU-ruby-wasm-javascript-helper)