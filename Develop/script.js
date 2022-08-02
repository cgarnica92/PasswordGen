// Assignment code here
var charOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","0123456789","!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

var generatePassword = function() {
  var passwordLength = window.prompt("Password Length:\nEnter a Value Between 8 and 128");

  if (!generatePassword) {
    return;
  }

  if (passwordLength < 8 && passwordLength > 128) {
     
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please Enter a Value Between 8 and 128");
    return;
  }

  var upCase = window.confirm("Add Upper Case Characters?");

  var lowCase = window.confirm("Add Lower Case Characters?");

  var numVal = window.confirm("Add Numbers?");

  var spChar = window.confirm("Add Special Characters? \ne.g. !$@#&...");
  
  if (upCase && lowCase && numVal && spChar) {
    var characters = (charOptions);
  } else if (upCase && lowCase && numVal && spChar === false) {
    var characters = (charOptions[0] + charOptions[1] + charOptions[2]);
  } else if (upCase && lowCase && numVal === false && spChar === false) {
    var characters = (charOptions[0] + charOptions[1]);
  } else if (upCase && lowCase === false && numVal === false && spChar === false) {
    var characters = (charOptions[0]);
  } else if (upCase === false && lowCase && numVal && spChar === false) {
    var characters = (charOptions[1] + charOptions[2]);
  } else if (upCase === false && lowCase === false && numVal === false && spChar) {
    var characters = (charOptions[3]);
  } else if (upCase === false && lowCase === false && numVal && spChar === false) {
    var characters = (charOptions[2]);
  } else if (upCase === false && lowCase && numVal === false && spChar === false) {
    var characters = (charOptions[1]);
  } else if (upCase === false && lowCase && numVal && spChar) {
    var characters = (charOptions[1] + charOptions[2] + charOptions[3]);
  } else if (upCase === false && lowCase === false && numVal && spChar) {
    var characters = (charOptions[2] + charOptions[3]);
  } else if (upCase === false && lowCase && numVal === false && spChar) {
    var characters = (charOptions[1] + charOptions[3]);
  } else if (upCase && lowCase === false && numVal && spChar === false) {
    var characters = (charOptions[0] + charOptions[2]);
  } else if (upCase && lowCase === false && numVal === false && spChar) {
    var characters = (charOptions[0] + charOptions[3]);
  } else {
    return;
  }

  for(var i= 0; i = passwordLength; i++) {
    var characters[i];
    console.log(characters[i]);
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
