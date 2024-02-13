code_area = JS.global.document.getElementById("ruby-code")
@window = JS.global
@window.editor = @window[:CodeMirror].fromTextArea(code_area, {
  lineNumbers: true,
  mode: "text/x-ruby",
  matchBrackets: true,
  indentUnit: 4
})

define_method :click_run_button do
  code_area = JS.global.document.getElementById("ruby-code")
  @window.editor.save
  output_div = JS.global.document.getElementById("output")
  code = <<-RUBY
    #{code_area.value}
  RUBY

  begin
    output_div.innerHTML = Kernel.eval(code.strip)
  rescue => e
    output_div.innerHTML = e.to_s
  end
end

# check_interval = JS.global.setInterval(lambda {
#   if @window.rubyVM != undefined
#     JS.global.clearInterval(check_interval)
#     click_run_button
#   end
# }, 500)

# Set up the event listener for the run code button
JS.global.document.getElementById("run-code").addEventListener("click") do |e|
  click_run_button
end