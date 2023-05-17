// Thank For Inisilion = https://softauthor.com/javascript-toggle-class-element/
//Toggle A Class Between Multiple Elements
const navBarGroup = document.getElementById("click-me"); // This ele is a hold of all eles
let nextBtn = null;
const liPressed = (e) => {
	e.target.classList.toggle("active");
	if (e.target.nodeName === 'A') {
		e.target.classList.add("active");
		if (nextBtn !== null) {
			nextBtn.classList.remove("active");
		}
		nextBtn = e.target;
	}
}
navBarGroup.addEventListener("click", liPressed);