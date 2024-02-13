require 'js'
require 'js/require_remote'

module Kernel
    alias original_require_relative require_relative
    def require_relative(path)
        JS::RequireRemote.instance.load(path)
    end
end
app_path = __FILE__
$0 = File::basename(app_path, ".rb") if app_path
require_relative "require/second" # Here it should be relative to main.rb. Note: I will upstream the fix for this.

JS.global.document.getElementById("spinner").style.display = "none"
JS.global.document.querySelector(".buttons").style.display = "block"