// Promt 5 times for each - Length, Lowercase, Uppercase, Numeric, Special characters ($@%&*, etc.)

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
/*
var passwordArray = []
// Function to prompt user for password options
function getPasswordOptions() {
  // Character Length
  const length = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
    if (length >= 10 && length <= 64) {
      // Lowercase
      var containLowercase = confirm("Do you want lowercase characters in the password?");
      // Uppercase
      var containUppercase = confirm("Do you want uppercase characters in the password?");
      // Numeric
      var containNumeric = confirm("Do you want numeric characters in the password?");
      // Special Char
      var containSpecial = confirm("Do you want special characters in the password?");
      passwordArray = [length, containLowercase, containUppercase, containNumeric, containSpecial];
      for (i = 1; i < 5; i++) { // Iterate to check if atleast one of the character types is used.
        if (passwordArray[i] != true) {
          alert("Please use a password with atleast one lot of characters"); getPasswordOptions();
            } else return passwordArray;  
      } 
    } else alert("Please enter an amount of characters between 10 - 64!"); getPasswordOptions();

} 
*/

function getPasswordOptions() {
  var length = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
  while (isNaN(length) || length < 10 || length > 64) {
    length = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
  };
  
  // Lowercase
  isLowercaseIncluded = confirm("Do you want lowercase characters in the password?");
  // Uppercase
  isUppercaseIncluded = confirm("Do you want uppercase characters in the password?");
  // Numeric
  isNumberIncluded = confirm("Do you want numeric characters in the password?");
  // Special Char
  isSpecialCharsIncluded = confirm("Do you want special characters in the password?");
 
  // Prompt user about length of the password
  // while the user input is not a number or < 10 or > 64, we prompt them again about the length of the password
  // var allIncluded = isLowercaseIncluded + isUppercaseIncluded + isNumberIncluded + isSpecialCharsIncluded;


  // while (isLowercaseIncluded === 'false' && isUppercaseIncluded === 'false' && isNumberIncluded === 'false' && isSpecialCharsIncluded === 'false') {
  //   isLowercaseIncluded = confirm("Do you want lowercase characters in the password?");
  //   isUppercaseIncluded = confirm("Do you want uppercase characters in the password?");
  //   isNumberIncluded = confirm("Do you want numeric characters in the password?");
  //   isSpecialCharsIncluded = confirm("Do you want special characters in the password?");
  // }

  // if (isLowercaseIncluded === 'true' && isUppercaseIncluded === 'true' && isNumberIncluded === 'true' && isSpecialCharsIncluded === 'true') {
    
  //   }
    
    return {
      length: length,
      isLowercaseIncluded: isLowercaseIncluded,
      isUppercaseIncluded: isUppercaseIncluded,
      isNumberIncluded: isNumberIncluded,
      isSpecialCharsIncluded: isSpecialCharsIncluded,

  // use confirm to ask user if they want Lowercase
  // use confirm to ask user if they want Uppercase
  // use confirm to ask user if they want Numeric
  // use confirm to ask user if they want Special characters
  // while the user says no to all of the above, repeat these series of confirm

  
}



// getPasswordOptions();

// while (getPasswordOptions.isLowercaseIncluded === 'true' && getPasswordOptions.isUppercaseIncluded === 'true' && getPasswordOptions.isNumberIncluded === 'true' && getPasswordOptions.isSpecialCharsIncluded === 'true') {


// console.log(passwordArray);

// Function for getting a random element from an array
// function getRandom(arr) {
//   var rand = myArray[Math.random() * myArray.length | 0]
// };
// getRandom();


// Array.prototype.sample = function(){
//   return this[Math.floor(Math.random()*this.length)];
// };

function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// console.log(getRandom(lowerCasedCharacters));

// console.log(numericCharacters.sample())

// console.log(getRandom(getPasswordOptions));

// length = passwordArray[0];

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
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
  if (passwordOptions.isLowercaseIncluded === 'false' && passwordOptions.isUppercaseIncluded === 'false' && passwordOptions.isNumberIncluded === 'false' && passwordOptions.isSpecialCharsIncluded === 'false') {
    getPasswordOptions();
  };


  var password = '';
  for (var i = 0; i < passwordOptions.length; i++) {
   var password = password + getRandom(possibleCharacters);
  }
  
  // if (isLowercaseIncluded === 'false') {
  //   map
  // }
  
  
  
  return password;
};


//  generatePassword();
// console.log(possibleCharacters);
// console.log(generatePassword())

// let (i = 0; i < length; i++;) {
//   var password += possibleCharacters.sample[i];
// }

// var password = possibleCharacters.sample(length);





// Dont need to edit below

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
