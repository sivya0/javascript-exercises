const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleanCharacters = string.toLowerCase().split("").filter(char => alphanumerical.includes(char));
    
console.log(cleanCharacters.join(""))
console.log(cleanCharacters.reverse().join(""))
    

    return cleanCharacters.join("") === cleanCharacters.reverse().join("");
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'))
// Do not edit below this line
module.exports = palindromes;
