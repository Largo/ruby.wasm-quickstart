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

# 4. Pack wasm-gems/ into the module at /gems (/bundle is used by the base build).
#    Ruby code loads the gems with: require "/gems/setup"
bundle exec rbwasm pack "$BASE" --dir ./wasm-gems::/gems -o ruby-app.wasm

ls -l ruby-app.wasm
