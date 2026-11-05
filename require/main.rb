require "js"
# Makes require_relative fetch .rb files from the web server
# (resolved relative to the HTML page that loads ruby.wasm).
require "js/require_remote/relative_shim"

require_relative "require/second"

document = JS.global[:document]
document.getElementById("spinner")[:style][:display] = "none"
document.querySelector(".buttons")[:style][:display] = "block"
