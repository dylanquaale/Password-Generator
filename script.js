// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if(!max) {
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

    




}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
