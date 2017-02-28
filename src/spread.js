
// Оператор возворота ...
let langArray = ['C', 'C++', 'C#'];
let langArray2 = ['Java', 'JS', 'Ruby'];
let lang = [...langArray,'F#',...langArray2];

console.log(lang);


function add(a,b,c) {
	console.log(a+b+c)
}
let numb = [1,2,3];

add(...numb);