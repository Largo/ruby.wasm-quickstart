$document = JS.global.document

$document.getElementById("hello").addEventListener("click") do |e|
    JS.global.alert("Hello From second.rb!")
end