//
// var pass_length = prompt ("Enter how many characters length do you want");
// var isNumber = confirm ("Do you want to contain Numbers?" + "\r\n(Click Ok to include)");
// var isSymbol = confirm ("Do you want to contain Special Characters?" + "\r\n(Click Ok to include)");
// var isUpper = confirm ("Do you want to contain Capital Letters?" +"\r\n(Click Ok to include)");
// var alpha_options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// var upper_options = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","V","X","Y","Z"];
// var num_options = ["1","2","3","4","5","6","7","8","9","0"];
// var sym_options = [ "!","@", "#", "$", "%", "&", "/", "(", ")", "=", "?"];
// var password = "";

// console.log(pass_length);
// console.log(isUpper);
// console.log(isNumber);
// console.log(isSymbol);


// if (pass_length >= 8 && pass_length <= 128) {
//   alert ("Todo listo");
// }
// if (isNumber) {
//   // var randomNumber = Math.floor (Math.random() *num_options.length);
//   // var numbers = num_options [randomNumber];
//   var options_array1 = alpha_options.concat(num_options);
//   // var options_array1 = alpha_options.push (num_options);
// } else {
//   var options_array1 = alpha_options;
// }

// if (isSymbol) {
//   // var randomNumber = Math.floor (Math.random() *sym_options.length);
//   // var symbols = sym_options [randomNumber];
//   var options_array2 = options_array1.concat(sym_options);
//   // options_array.push (sym_options);
// } else {
//   options_array2 = options_array1;
// }

// if (isUpper) {
//   // var randomNumber = Math.floor (Math.random() *upper_options.length);
//   // var uppers = upper_options [randomNumber];
//   var options_final = options_array2.concat(upper_options);
//   // options_array.push (upper_options);
// } else {
//   options_final = options_array2;
// }


// // console.log (numbers)
// // console.log (symbols)
// // console.log (uppers)
// console.log (options_array1)
// console.log (options_array1.length);
// console.log (options_array2)
// console.log (options_array2.length);
// console.log (options_final)
// console.log (options_final.length);

// while (password.length < pass_length) {
//   var randomNumber = Math.floor (Math.random() *options_final.length);
//   var randomChar = options_final [randomNumber];
//   var password = password.concat(randomChar);
// }
// alert("Your Generated password: " + password);

// console.log (randomChar);
// console.log (password);

//

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  // passwordText.value = password;

var pass_length = prompt ("Enter how many characters length do you want");
var isNumber = confirm ("Do you want to contain Numbers?" + "\r\n(Click Ok to include)");
var isSymbol = confirm ("Do you want to contain Special Characters?" + "\r\n(Click Ok to include)");
var isUpper = confirm ("Do you want to contain Capital Letters?" +"\r\n(Click Ok to include)");
var alpha_options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upper_options = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","V","X","Y","Z"];
var num_options = ["1","2","3","4","5","6","7","8","9","0"];
var sym_options = [ "!","@", "#", "$", "%", "&", "/", "(", ")", "=", "?"];
var password = "";

console.log(pass_length);
console.log(isUpper);
console.log(isNumber);
console.log(isSymbol);


if (pass_length >= 8 && pass_length <= 128) {
  alert ("Todo listo");
}
if (isNumber) {
  // var randomNumber = Math.floor (Math.random() *num_options.length);
  // var numbers = num_options [randomNumber];
  var options_array1 = alpha_options.concat(num_options);
  // var options_array1 = alpha_options.push (num_options);
} else {
  var options_array1 = alpha_options;
}

if (isSymbol) {
  // var randomNumber = Math.floor (Math.random() *sym_options.length);
  // var symbols = sym_options [randomNumber];
  var options_array2 = options_array1.concat(sym_options);
  // options_array.push (sym_options);
} else {
  options_array2 = options_array1;
}

if (isUpper) {
  // var randomNumber = Math.floor (Math.random() *upper_options.length);
  // var uppers = upper_options [randomNumber];
  var options_final = options_array2.concat(upper_options);
  // options_array.push (upper_options);
} else {
  options_final = options_array2;
}


// console.log (numbers)
// console.log (symbols)
// console.log (uppers)
console.log (options_array1)
console.log (options_array1.length);
console.log (options_array2)
console.log (options_array2.length);
console.log (options_final)
console.log (options_final.length);

while (password.length < pass_length) {
  var randomNumber = Math.floor (Math.random() *options_final.length);
  var randomChar = options_final [randomNumber];
  var password = password.concat(randomChar);
}
alert("Your Generated password: " + password);

console.log (randomChar);
console.log (password);

document.getElementById("password").placeholder = password;
document.getElementById("password").style.border = "dashed #af0808 3px";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



