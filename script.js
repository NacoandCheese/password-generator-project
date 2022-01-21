// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Erich's template starter code
var possibleCharacters = '';   //this is your accumulator variable. You can add characters to this
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var specialChars = '!@#$%^&*'
var password = ""

// using alert("Message here"), ask the user if they want lowercase, uppercase, etc...
// use conditionals (if elf if...) to ask if the user wants lowercase, uppercase, etc.  
// if they want lowercase, add lowercase characters to possibleCharacters
// same for uppercase, numbers, specialchars
// then loop through possibleCharacters x number of times to assemble a password
// once you have assembled a password, write it to the screen


//created a function for generate password
function generatePassword() {
  password = ""

  //accumulator variables
  var possibleCharacters = "";

  //creates a user prompt to select password length
  var passwordUser = window.prompt("Please indicate a password length between 8 characters and 128 characters.");
  passwordUser = parseInt(passwordUser);
  //window alert if user input is less than 8
  if (passwordUser < 8) {
    window.alert("Password must have more than 7 characters. Input password length between 8 characters and no more than 128 characters.");
    return "";
  }
  //window alert if user input is greater than 128
  if (passwordUser > 128) {
    window.alert("Password must not have more than 128 characters.");
    return "";
  }

  // option to add lowercase characters 
  var lowercaseOption = window.confirm(" Do you want to use lower case (a-z) letters in your password?");

  if (lowercaseOption) {
    possibleCharacters += lowerCase
  }

  //option to add uppercase characters
  var upperCaseOption = window.confirm(" Do you want to use upper case (A-Z) letters in your password?");

  if (upperCaseOption) {
    possibleCharacters += upperCase
  }

  // option to add numbers
  var numbersOption = window.confirm(" Woud you like to use numbers in your password?");

  if (numbersOption) {
    possibleCharacters += numbers
  }

  //option to add special characters
  var specialCharOption = window.confirm(" Would you like to use special characters (!@#%^&*) in your password?");

  if (specialCharOption) {
    possibleCharacters += specialChars
  }


  for (var i = 0; i < passwordUser; i++) {
    //this line creates a random number
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    console.log("loop number: ", i)
    console.log("Current Random Number: ", randomNumber)
    console.log("Current password: ", password)
    // this line adds our current random number to our password
    password = password + possibleCharacters[randomNumber]
    // console.log("password", password) 

  }

  writePassword();

  

  console.log("Final password: ", password)
}




// Write password to the #password input

function writePassword() {
  var passwordText = document.querySelector("#password")
  
  
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

