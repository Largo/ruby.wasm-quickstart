cd ruby.wasm
./bin/setup
# Compile extension library
bundle exec rake compile
rake install
cd ..
bundle exec rbwasm --log-level debug build --ruby-version 3.3 --target wasm32-unknown-wasi --build-profile full  -o ruby-app.wasm
# Remove the debug info
wasm-opt --strip-debug ruby-app.wasm -o ruby-app.wasm
# Optimize for size without hurting speed as much.
wasm-opt ruby-app.wasm -Os -o ruby-app.wasm