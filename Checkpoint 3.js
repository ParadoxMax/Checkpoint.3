var bold = document.getElementById("bold")
var text = document.getElementById("textbox")
var italic = document.getElementById("italic")
var underlined = document.getElementById("underlined")
var fontcolor = document.getElementById("fontcolor")
var fontstyle = document.getElementById("fontstyle")
var fontsize = document.getElementById("fontsize")
var menu = document.getElementById("menu")


bold.addEventListener("click", function(event){
    text.classList.toggle("strongtext")
})

italic.addEventListener("click", function(event){
    text.classList.toggle("italictext")
})

underlined.addEventListener("click", function(event){
    text.classList.toggle("underlinedtext")
})

fontcolor.addEventListener("change", function(event){
    console.log(event.target.value  )
   text.style.color = event.target.value
})
fontstyle.addEventListener("change", function(event){
    text.style.fontFamily = event.target.value
})

fontsize.addEventListener("change", function(event){
    console.log(event.target.value)
    text.style.fontSize = event.target.value + "px"
})

