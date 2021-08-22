// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

function getPasswordLength() {
  var passwordLength = prompt("Please choose the desired length of your password.  Must be 8 to 128 characters long");

  // Check to see if the password length is an integer between 8 to 128
  // To check if the input is an integer, we multiply passwordLength by 1 to automatically convert the string to a number 
  if(passwordLength < 8 || passwordLength > 128 || !Number.isInteger((passwordLength * 1))) {
    alert("You must enter an integer between 8 to 128!");
    return getPasswordLength();
  }
  
  return passwordLength;
}

function getCharacters() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


  var includeLowerCase = confirm("Would you like to include lowercase characters in your password?");
  var includeUpperCase = confirm("Would you like to include uppercase characters in your password?");
  var includeNumeric = confirm("Would you like to include numeric characters in your password?");
  var includeSpecial = confirm("Would you like to include special characters in your password?");

  if(includeLowerCase == true) {
    characters += lowerCase;
  }
  if(includeUpperCase == true) {
    characters += upperCase;
  }
  if(includeNumeric == true) {
    characters += numeric;
  }
  if(includeSpecial == true) {
    characters += special;
  }

  // Check to see if user selected none of the options (resulting in an empty string)
  if(characters.length == 0) {
    alert("You must select at least one of the four options!");
    return getCharacters();
  }

  return characters;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
