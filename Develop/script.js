// Assignment code here
var generatePassword = function() {
  var passwordLength = window.prompt("Password Length:\nEnter a Value Between 8 and 128");

  if (!generatePassword) {
    return;
  }

  if (passwordLength < 8 && passwordLength > 128) {
     
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please Enter a Value Between 8 and 128")
  }

  var upCase = window.confirm("Add Upper Case Characters?");

  var lowCase = window.confirm("Add Lower Case Characters?");

  var numVal = window.confirm("Add Numbers?");

  var spChar = window.confirm("Add Speacial Characters?");
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
