const reverseString = function(string) {

  let splitString = string.split(""); //Splits the string into array
  let reverseString = splitString.reverse(); //Reverses the order of the array
  let joinString = reverseString.join(""); //Joins the array to make reversed string

  return joinString
};

// Do not edit below this line
module.exports = reverseString;
