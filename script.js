// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%^&*";
var passLength = "";
var password = "";
var question = [4];

function askLength(){
  passLength = window.prompt("How many characters do you need for your password 8-128"); 
}

function askAtributes(){
  question[0] = window.confirm("Do you want lowercase characters?");
  question[1] = window.confirm("Do you want uppercase characters?");
  question[2] = window.confirm("Do you want numeric characters?");
  question[3] = window.confirm("Do you want special characters?");

  if ( !question[0] && !question[1] && !question[2] && !question[3]){
    alert("You have to select at least one type of character for your password, try again....");
    askAtributes();
  }
  else{
    password = '';
    if( question[0]){
      password += lowerCase;
    }
    if( question[1]){
      password += upperCase;
    }
    if( question[2]){
      password += numeric;
    }
    if( question[3]){
      password += specialChar;
    }
  }
}

function generatePassword(){
  
  askLength();

  while ( isNaN(passLength) || passLength < 8  || passLength > 128 ){
    askLength();
  }
  askAtributes();

  var result = "";

  for ( i = 0; i < passLength; i++ ) {
    result += password.charAt(Math.floor(Math.random() * password.length));
}
  return result;
}

// Write password to the #password input
function writePassword() {
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password2;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
