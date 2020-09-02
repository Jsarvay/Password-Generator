// Assignment Code
var generateBtn = document.querySelector("#generate");


//variables for password characters
var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!()-.?[]_`~;:!@#$%^&*+=";

// Write password to the #password input
function writePassword() {

  //Ask prompts to get password variables
  var length = Number(
    prompt("How long would you like this password? Choose a value from 8-128")
  )
    if (length < 8) {
      alert('Try Again, please choose a valid length');
      return;
    };
    if (length > 128) {
      alert('Try Again, please choose a valid length');
      return;
    }
  var lowerCase = confirm("Include Lower Case Letters?");
  var upperCase = confirm("Include Upper Case Letters?");
  var numbers = confirm("Include Numbers?");
  var specialChars = confirm("Include Special Characters?");

  //check prompts and add appropriate characters to possible options
  var characters = "";

  if (lowerCase === true) {
    characters += lCase;
  }

  if (upperCase === true) {
    characters += uCase;
  }

  if (numbers === true) {
    characters += num;
  }

  if (specialChars === true) {
    characters += special;
  }

  if (characters.length == 0) {
    alert("Please select at least one character set");
    return;
  }

  splitChar = characters.split("");
 
  //function that reads through character string to select values at random to generate password based on length
  function generatePassword() {
    var pass = "";
    for (var i = 0; i < length; i++) {
    pass += splitChar[(Math.floor(Math.random() * splitChar.length))];
  }
  return pass;
}

var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
