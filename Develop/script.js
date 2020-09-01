// Assignment Code
var generateBtn = document.querySelector("#generate");


//functions to generate individual characters
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
  var special = "!()-.?[]_`~;:!@#$%^&*+="
  return special[Math.floor(Math.random() * special.length)]
}

console.log(randomSpecial())

// Write password to the #password input
function writePassword() {

  //Ask prompts to get password variables
  var lowerCase = confirm("Include Lower Case Letters?");
  var upperCase = confirm("Include Upper Case Letters?");
  var numbers = confirm("Include numbers?");
  var specialChars = confirm("Include Special Characters?")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
