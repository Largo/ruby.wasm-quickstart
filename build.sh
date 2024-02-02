cd ruby.wasm
./bin/setup
# Compile extension library
bundle exec rake compile
rake install
cd ..
bundle exec rbwasm --log-level debug build --ruby-version 3.3 --target wasm32-unknown-wasi --build-profile full  -o ruby-app.wasm