// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min=0
    }
}
var rand = Math.random()
 return Math.floor(min*(1 - rand) + rand*max)
//gives user and random position in the list 
function getRandomItem(list) {
    return list[randomInt(list.length)]
}

function generatePassword() {

    var userInput = window.prompt("How many characters would you like in your password?")
    //parse in will try to give a string a number value 
    var passwordLength = pareseInt(userInput)
    // tells us that is not a number
    if(isNaN(passwordLength)) {
        window.alert("oops not a number")
        return
    }









}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
