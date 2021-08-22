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





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
