//Character Options for building password
var charOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charOpt1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];
var charOpt2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charOpt3 = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "{", "|", "}", "~"];

//Default return value for base password
var retVal = ""

//Function for generating password
var generatePassword = function () {
  //Sets Password Length
  var passwordLength = window.prompt("Password Length:\nEnter a Value Between 8 and 128");

  if (!passwordLength) {
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please Enter a Value Between 8 and 128");
    return;
  }
  console.log(passwordLength);

  //Sets Password Paramaters
  var upCase = window.confirm("Add Upper Case Characters?");

  var lowCase = window.confirm("Add Lower Case Characters?");

  var numVal = window.confirm("Add Numbers?");

  var spChar = window.confirm("Add Special Characters? \ne.g. !$@#&...");

  if (upCase && lowCase && numVal && spChar) {
    var charset = (charOpt);
  } else if (upCase && lowCase && numVal && !spChar) {
    var charset = (charOpt + charOpt1 + charOpt2);
  } else if (upCase && lowCase && !numVal && !spChar) {
    var charset = (charOpt + charOpt1);
  } else if (upCase && !lowCase && !numVal && !spChar) {
    var charset = (charOpt);
  } else if (!upCase && lowCase && numVal && !spChar) {
    var charset = (charOpt1 + charOpt2);
  } else if (!upCase && !lowCase && !numVal && spChar) {
    var charset = (charOpt3);
  } else if (!upCase && !lowCase && numVal && !spChar) {
    var charset = (charOpt2);
  } else if (!upCase && lowCase && !numVal && !spChar) {
    var charset = (charOpt1);
  } else if (!upCase && lowCase && numVal && spChar) {
    var charset = (charOpt1 + charOpt2 + charOpt3);
  } else if (!upCase && !lowCase && numVal && spChar) {
    var charset = (charOpt2 + charOpt3);
  } else if (!upCase && lowCase && !numVal && spChar) {
    var charset = (charOpt1 + charOpt3);
  } else if (upCase && !lowCase && numVal && !spChar) {
    var charset = (charOpt + charOpt2);
  } else if (upCase && !lowCase && !numVal && spChar) {
    var charset = (charOpt + charOpt3);
  } else {
    return;
  
  }
  console.log(charset);


  //Generates password
  for (var i = 0; i < passwordLength; i++) {
    var index = charset[Math.floor(Math.random() * charset.length)]
    retVal += index;
  }
  return retVal;

}

console.log(retVal);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
