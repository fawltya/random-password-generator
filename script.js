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

var passwordArray = []
// Function to prompt user for password options
function getPasswordOptions() {
  // Character Length
  var charLength = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
    if (charLength >= 10 && charLength <= 64) {
      // Lowercase
      var containLowercase = confirm("Do you want lowercase characters in the password?");
      // Uppercase
      var containUppercase = confirm("Do you want uppercase characters in the password?");
      // Numeric
      var containNumeric = confirm("Do you want numeric characters in the password?");
      // Special Char
      var containSpecial = confirm("Do you want special characters in the password?");
      passwordArray = [charLength, containLowercase, containUppercase, containNumeric, containSpecial];
      for (i = 1; i < 5; i++) { // Iterate to check if atleast one of the character types is used.
        if (passwordArray[i] != true) {
          alert("Please use a password with atleast one lot of characters"); getPasswordOptions();
            } else return passwordArray;  
      } 
    } else alert("Please enter an amount of characters between 10 - 64!"); getPasswordOptions();

} 
    
getPasswordOptions()

console.log(passwordArray)

// Function for getting a random element from an array
function getRandom(arr) {
  const randChar = allChar[Math.floor(Math.random() * array.length)];
  console.log(randChar);
}

getRandom();
// Function to generate password with user input
function generatePassword() {

}



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