const charSlider = document.getElementById ("charSlider")
const charSlider2 = document.getElementById("charSlider2")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById ("includeNumbers")
const includeSpecialCElement = document.getElementById ("includeSpecialC")
const passwordGenForm = document.getElementById ("passwordGenForm")
const passwordDisplay = document.getElementById ("passwordDisplay")


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

charSlider.addEventListener("input", syncCharacterAmount)
charSlider2.addEventListener("input", syncCharacterAmount)

passwordGenForm.addEventListener("submit", e => {
    e.preventDefault()
    const charSlider = charSlider2.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialC = includeSpecialCElement.checked
    const password= generatePassword(charSlider, includeUppercase, includeNumbers, includeSpecialC)
    passwordDisplay.innerText = password
})

function generatePassword(charSlider, includeUppercase, includeNumbers, includeSpecialC) {
   let charCodes = LOWERCASE_CHAR_CODES
   if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
   if (includeNumbers) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
   if (includeSpecialC) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)
    
   const passwordCharacters = []
   for (let i= 0; i < charSlider, i++;) {
       const characterCode = charCodes[Math.floor(Math.random() * charCodes.lenth)]
       passwordCharacters.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}

function syncCharacterAmount(e) {
    const value = e.target.value
    charSlider.value = value
    charSlider2.value = value
}



 