// Assignment code here
var generatePassword = function() {
  var paswordLength = window.prompt("Password Length:\nEnter a Value Between 8 and 128");

  if (!generatePassword) {
    return;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
