// JavaScript Document
function quiz (num, answer) {
	let explanation = document.querySelectorAll(".quiz#"+num+" .explain")[0];
	let explanationTitle = document.querySelectorAll(".quiz#"+num+" .explain .titl")[0];
	let correct = document.querySelectorAll(".quiz input#"+num+answer)[0];
	if (correct.checked == true) {
		explanationTitle.innerHTML = "Correct!"
		explanation.style.display = "block";
		explanation.style.backgroundColor = "lightgreen";
	} else if (correct.checked == false) {
		explanationTitle.innerHTML = "Oops! That's Wrong!"
		explanation.style.display = "block";
		explanation.style.backgroundColor = "lightcoral";
	}
}