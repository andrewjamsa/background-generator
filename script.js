var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function set_gradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";"
}

// color1.addEventListener("input", set_gradient)

// color2.addEventListener("input", set_gradient)

// what's the difference between addEventListener() and oninput attribute on the input tag in HTML?
// you can't add more events to the oninput attribute.