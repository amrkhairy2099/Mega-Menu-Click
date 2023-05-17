let navBar = document.getElementById("click");
let lis = document.querySelectorAll("nav > ul > li");
let links = document.querySelectorAll("nav > ul > li > div > a");

lis.forEach((e) => {
	e.setAttribute ('class', 'item');
})

// Start Close
// Click On Eny Where To Close Links
document.addEventListener("click", (e) => {	
	if (e.target !== links && e.target !== lis && e.target !== toggle && e.target !== afterToggle) {
		lis.forEach((li) => {
			li.classList.remove("active");
		})
		toggle.classList.remove("active");
		afterToggle.classList.remove("active");
	}
}) 

// Do This On Holder Container For All Elementes
navBar.onclick = function (e) {
	e.stopPropagation();
}
// End Close


// Start Toggle Menue
let toggle = document.getElementById("toggle");
let afterToggle = document.querySelector(".toggle");

toggle.onclick = function (e) {
	toggle.classList.toggle("active");
	e.stopPropagation();
}

afterToggle.onclick = function (e) {
	afterToggle.classList.toggle("active");
	e.stopPropagation();
}
// End Toggle Menue

