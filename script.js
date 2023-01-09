// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  var length = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
  while (isNaN(length) || length < 10 || length > 64) {
    length = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
  }
  
  // Loop until at least one option is set to true
  var isLowercaseIncluded = false;
  var isUppercaseIncluded = false;
  var isNumberIncluded = false;
  var isSpecialCharsIncluded = false;
  
  while (!isLowercaseIncluded && !isUppercaseIncluded && !isNumberIncluded && !isSpecialCharsIncluded) {
    alert("Please 'OK' atleast one character time");
    // Lowercase
    isLowercaseIncluded = confirm("Do you want lowercase characters in the password?");
    // Uppercase
    isUppercaseIncluded = confirm("Do you want uppercase characters in the password?");
    // Numeric
    isNumberIncluded = confirm("Do you want numeric characters in the password?");
    // Special Char
    isSpecialCharsIncluded = confirm("Do you want special characters in the password?");
  }
  
  return passwordOptions = {
    length: length,
    isLowercaseIncluded: isLowercaseIncluded,
    isUppercaseIncluded: isUppercaseIncluded,
    isNumberIncluded: isNumberIncluded,
    isSpecialCharsIncluded: isSpecialCharsIncluded,
  }  
}


function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  possibleCharacters = [];
  
  if (passwordOptions.isLowercaseIncluded === true) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  } 
  if (passwordOptions.isUppercaseIncluded === true) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  if (passwordOptions.isNumberIncluded === true) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (passwordOptions.isSpecialCharsIncluded === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  };
  
  var password = '';
  for (var i = 0; i < passwordOptions.length; i++) {
   var password = password + getRandom(possibleCharacters);
  }

  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
