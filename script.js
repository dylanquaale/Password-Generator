// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min=0
    }

var rand = Math.random()
 return Math.floor(min*(1 - rand) + rand*max)
}

 //gives user and random position in the list 
function getRandomItem(list) {
    return list[randomInt(list.length)]
}

function generatePassword() {

    var userInput = window.prompt("How many characters would you like in your password?")
    //parse in will try to give a string a number value 
    
    var passwordLength = pareseInt(userInput)
    // tells us that is not a number
    
    if (isNaN(passwordLength)) {
        window.alert("not a number!")
        return
    }

    //if user enters password less than 8 or more than 128 characters they are redirected by prompt
    // this is || like saying or
    //return is the "password length must be between" returned back to the user
    if (passwordLength < 8 || passwordLength > 128){
        window.alert("Password length must be between 8 and 128 characters")
        return
    }
    // asking the user what they wish to include in their password
    var userWantsUppercase = window.confirm("would you like to include uppercase letters in your password?")
    var userWantsLowercase = window.confirm("would you like to include lowercase letters in your password?")
    var userWantsSymbols = window.confirm("would you like to add symbols in your password?")
    var userWantsNumbers = window.confirm("would you like to add numbers to your password?")

   // characters the user can choose from to create their password
    var uppercaseList = []
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numberList =   ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var symbolList = ["!", "@", "#", "$", "%", "^,", "&", "*", "(", ")"]

    // this is the users cart
    var optionCart = []
    
    //this is adding in the upper case
    for (var i = 0; i < lowercaseList.length; i++) {
        uppercaseList[i] = lowercaseList[i].toUpperCase()
    }

    // .push is adding characters to the cart
    if (userWantsNumbers === true) {
        optionCart.push(numberList)
    }

    if (userWantsSymbols === true) {
        optionCart.push(symbolList)
    }

    if (userWantsUppercase === true) {
        optionCart.push(uppercaseList)
    }

    if (userWantsLowercase === true) {
        optionCart.push(lowercaseList)
    }

    //if user doesn't select any of the if statements then the uppercase will be pushed in the cart to be used for the password
    if (optionCart.length === 0){
        optionCart.push(uppercaseList)
    }

    var generatedPassword = ""
    //making list random 
    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandomItem(optionCart)
        var randomChar = getRandomItem(randomList)
        console.log(randomChar)
        generatedPassword += randomChar
        //this function ends generating password
    }    

    return generatedPassword


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
