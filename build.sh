#!/bin/sh
# Builds ruby-app.wasm: the official Ruby 4.0 WebAssembly build (with stdlib
# and the js gem) plus the gems from wasm-gems/Gemfile, packed into one file.
# No C compiler, Rust or wasi-sdk needed - works on Linux, macOS and Windows.
set -e

RUBY_VERSION=4.0
RUBY_WASM_VERSION=2.10.1
BASE=ruby+stdlib.wasm

# 1. Download the official Ruby build once.
if [ ! -f "$BASE" ]; then
  curl -fL -o "$BASE" \
    "https://cdn.jsdelivr.net/npm/@ruby/${RUBY_VERSION}-wasm-wasi@${RUBY_WASM_VERSION}/dist/ruby+stdlib.wasm"
fi

# 2. Host tooling (rbwasm).
bundle install

# 3. Browser gems into wasm-gems/bundle (creates bundle/bundler/setup.rb).
BUNDLE_GEMFILE=wasm-gems/Gemfile bundle install --standalone

# 4. jsg (friendly JS syntax: document.title instead of JS.global[:document][:title]).
#    Its gemspec depends on ruby_wasm and js for the jsg CLI, which the browser
#    does not need, so only the gem itself is unpacked into wasm-gems/vendor.
JSG_VERSION=0.2.1
if [ ! -d "wasm-gems/vendor/jsg-${JSG_VERSION}" ]; then
  mkdir -p wasm-gems/vendor
  (cd wasm-gems/vendor && gem fetch jsg -v "$JSG_VERSION" && gem unpack "jsg-${JSG_VERSION}.gem" && rm "jsg-${JSG_VERSION}.gem")
fi

# 5. Pack wasm-gems/ into the module at /gems (/bundle is used by the base build).
#    Ruby code loads the gems with: require "/gems/setup"
bundle exec rbwasm pack "$BASE" --dir ./wasm-gems::/gems -o ruby-app.wasm

ls -l ruby-app.wasm
