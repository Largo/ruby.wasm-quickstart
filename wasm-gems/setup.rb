# Puts the gems from wasm-gems/Gemfile (and wasm-gems/vendor) on the load
# path inside the browser.
# Usage in your Ruby code:  require "/gems/setup"
#
# (Bundler's own bundle/bundler/setup.rb needs full RubyGems, which the
# browser build of Ruby does not load, so we add the lib folders directly.)
patterns = ["bundle/ruby/*/gems/*/lib", "vendor/*/lib"]
patterns.flat_map { |pattern| Dir.glob(File.join(__dir__, pattern)) }.each do |lib|
  $LOAD_PATH.unshift(lib)
end
