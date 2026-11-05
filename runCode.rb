document = JS.global[:document]
code_area = document.getElementById("ruby-code")
@editor = JS.global[:CodeMirror].fromTextArea(code_area, {
  lineNumbers: true,
  mode: "text/x-ruby",
  matchBrackets: true,
  indentUnit: 4
})

document.getElementById("spinner")[:style][:display] = "none"

def run_code
  @editor.save
  code = JS.global[:document].getElementById("ruby-code")[:value].to_s
  output_div = JS.global[:document].getElementById("output")

  begin
    output_div[:innerText] = Kernel.eval(code).inspect
  rescue Exception => e
    output_div[:innerText] = "#{e.class}: #{e.message}"
  end
end

# Run the code when the button is clicked
document.getElementById("run-code").addEventListener("click") { run_code }
