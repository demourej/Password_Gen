// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  // passwordText.value = password;

  var pass_length = prompt("Enter how many characters length do you want");



  if (pass_length >= 8 && pass_length <= 128) {
    // alert("Info: Longitud listo");
    var isUpper = confirm("Do you want to include upercase letters in your password?" + "\r\n(Click Ok to include)");
    var isLower = confirm ("Do you want to include lowercase letters in your password?" + "\r\n(Click Ok to include)");
    var isNumber = confirm("Do you want to include numbers in your password?" + "\r\n(Click Ok to include)");
    var isSymbol = confirm("Do you want to include special characters in your password?" + "\r\n(Click Ok to include)");
    var alpha_options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper_options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "V", "X", "Y", "Z"];
    var num_options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var sym_options = ["!", "@", "#", "$", "%", "&", "/", "(", ")", "=", "?"];
    var password = "";

    console.log(pass_length);
    console.log(isUpper);
    console.log(isLower);
    console.log(isNumber);
    console.log(isSymbol);

    if (isLower || isUpper || isNumber || isSymbol) {
      // alert("Info: Contenido listo");
      if (isLower) {
        var options_array0 = alpha_options;
      } else {
        options_array0 = [];
      }


      if (isNumber) {
        var options_array1 = options_array0.concat(num_options);
      } else {
        var options_array1 = alpha_options;
      }

      if (isSymbol) {
        var options_array2 = options_array1.concat(sym_options);
      } else {
        options_array2 = options_array1;
      }

      if (isUpper) {
        var options_final = options_array2.concat(upper_options);
      } else {
        options_final = options_array2;
      }

      console.log(options_array0)
      console.log(options_array0.length);
      console.log(options_array1)
      console.log(options_array1.length);
      console.log(options_array2)
      console.log(options_array2.length);
      console.log(options_final)
      console.log(options_final.length);

      while (password.length < pass_length) {
        var randomNumber = Math.floor(Math.random() * options_final.length);
        var randomChar = options_final[randomNumber];
        var password = password.concat(randomChar);
      }

      console.log(randomChar);
      console.log(password);

      document.getElementById("password").placeholder = "Your Secure Password\r\n\r\n" + password;
      document.getElementById("password").style.border = "dashed #af0808 3px";
      document.getElementById("password").style.backgroundColor = "lightgray";
      // alert("Your Generated password: " + password);
    } else {
      alert("Error: Your password must include at least one type of characters. \r\nPlease try again.")
    }
  } else {
    alert("Error: Your password must contain between 8 and 128 characters. \r\nPlease try again.")
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
