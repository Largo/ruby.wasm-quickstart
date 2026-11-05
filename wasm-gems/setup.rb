# Puts the gems from wasm-gems/Gemfile on the load path inside the browser.
# Usage in your Ruby code:  require "/gems/setup"
#
# (Bundler's own bundle/bundler/setup.rb needs full RubyGems, which the
# browser build of Ruby does not load, so we add the lib folders directly.)
Dir.glob(File.join(__dir__, "bundle/ruby/*/gems/*/lib")).each do |lib|
  $LOAD_PATH.unshift(lib)
end
