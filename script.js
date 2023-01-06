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

var charLength = 0;
// Function to prompt user for password options
function getPasswordOptions() {
  // Character Length
  var charLength = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
    if (charLength >= 10 && charLength <= 65) {
      return charLength;
    } else alert("Please enter an amount of characters between 10 - 64!");
      getPasswordOptions();
  // lowerCaseOption = prompt("How many characters would you like the password to be? (Between 10 - 64 characters)");
  // if (lowerCase)
  // return lowerCaseOption;
}

getPasswordOptions()
console.log(charLength)

// Function for getting a random element from an array
function getRandom(arr) {
  // var allChar = specialCharacters + upperCasedCharacters + lowerCasedCharacters + numericCharacters;
  // const randChar = allChar[Math.floor(Math.random() * array.length)];
  // console.log(randChar);
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