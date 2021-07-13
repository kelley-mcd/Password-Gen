//below are a list of the varriables I created for the JS file. each of those are looking to the main document (the html file) for the corresponding 'id' where they can be used and manipulated in the JS file.

const charSlider = document.getElementById ("charSlider")
const charSlider2 = document.getElementById("charSlider2")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById ("includeNumbers")
const includeSpecialCElement = document.getElementById ("includeSpecialC")
const passwordGenForm = document.getElementById ("passwordGenForm")
const passwordDisplay = document.getElementById ("passwordDisplay")

//below are the varriables I created to house my arrays that will be used for the random character generating purposes. The function that does that will look into these arrays for characters to choose from.
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh("abcdefghijklmnopqrstuvwxyz".split(""))
const NUMBER_CHAR_CODES = arrayFromLowToHigh("123456789".split(""))
const SYMBOL_CHAR_CODES = arrayFromLowToHigh("~!@#$%^&*".split(""))


//this is referring to the number slider and the number counter of the amount of characters that the user can choose when using the password generator. They are both looking for the event of the 'input' based on how many characters the user chooses for the password. Both of these items will yeild the same number. 
charSlider.addEventListener("input", syncCharacterAmount)
charSlider2.addEventListener("input", syncCharacterAmount)

//this event listener is lookingfor the 'submit' when the user clicks on the submit button to get the password. It is then prompted to run the function that will generate the password. 
passwordGenForm.addEventListener("submit", e => {
   //this prevents the page from refreshing and losing all of the users inputs.
    e.preventDefault()
    //the varriables below tell the code to check to see what the user has input for every single element (the number in the character amount, whether or not each of thoe boxes has been checked or not).
    const charSlider = charSlider2.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialC = includeSpecialCElement.checked
    //the generatePassword function is taking all of the variables defined above and combining them to house all of the information that the user put into the generator.
    const password= generatePassword(charSlider, includeUppercase, includeNumbers, includeSpecialC)
    //this simply tells the code where the generated password is going to go
    passwordDisplay.innerText = password
})
//this function is saying that IF the includeUppercase element is checked, IF the includeNumbers element is checked, and IF the includeSpecialC is checked, combine all of the arrays (see top of JS file) for the password. IF none of those are checked, the code is to use all lowercase values and no special characters or numbers
function generatePassword(charSlider, includeUppercase, includeNumbers, includeSpecialC) {
   let charCodes = LOWERCASE_CHAR_CODES
   if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
   if (includeNumbers) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
   if (includeSpecialC) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)
   
   
   //this for-loop will choose the random characters from the arrays and not choose a character that it has just previously chosen. It will only choose characters that in the length of each of the arrays while adding each chatacter to the end of the last character chosen.
   const passwordCharacters = []
   for (let i= 0; i < charSlider, i++;) {
       const characterCode = charCodes[Math.floor(Math.random() * charCodes.lenth)]
       passwordCharacters.push(characterCode)
   }
   // this for-loop returns a password that is joined and is considered a string by the ''.
   return passwordCharacters.join('')
}


//this function just starts at the lowest (most left) item in each of the arrays defined at the top and works its way to the right or end of the array.
function arrayFromLowToHigh(low, high) {
    

    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}

//this function just simply makes sure that the value the user selects in either the slider element is equal to the number amount and vice versa.
function syncCharacterAmount(e) {
    const value = e.target.value
    charSlider.value = value
    charSlider2.value = value
}



 