(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#burger-btn");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};



	button.addEventListener("click", hamburgerMenu, false);		
})();

// header color changing when the mouse move in
document.getElementById("header-con").addEventListener("mouseover", function() {
    document.getElementById("header-con").style.backgroundColor = "yellow";
    document.getElementById("header-con").style.transition = '1s';

 });
 document.getElementById("header-con").addEventListener("mouseout", function() {
    document.getElementById("header-con").style.backgroundColor = "#ffffff"; 
    document.getElementById("header-con").style.transition = '1s';
 });
