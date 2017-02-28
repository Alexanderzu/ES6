// let = "let"//для обьявлкения переменной с огр обл видимости
// //выделяет память под все функции и переменные объявленные в скрипте - это и называется hoisting

// if (true) {
// 	let version = "var" 
// }

// console.log(version);// не вызовиться тк let находится в пределах блока if {}




// 1 button
var buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) { // let дает возможность внутри цикла получать свою i
	var button = buttons[i];
	button.innerText = i;
	button.onclick = function(e) {
		console.log(i)
	}
}