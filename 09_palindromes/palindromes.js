const palindromes = function (string) {
  let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    newString = newString.replace(/\s/g, '');
  let reverseStr = newString.split('').reverse().join(''); 
    if(reverseStr === newString){
        return true;
    } else{
        return false;
    }
    
};


// Do not edit below this line
module.exports = palindromes;
