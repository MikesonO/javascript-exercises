const sumAll = function(num1, num2) {
  let newNum = 1;

  if (num1 < 0 || num2 < 0){
    return "ERROR";
  } else if(typeof num1 !== "number" || typeof num2 !== "number"){
    return "ERROR";
  }

  while(num1 < num2){
    num1++;
    newNum += num1;
  } 

  while (num2 < num1){
    num2 ++;
    newNum += num2;
  }

  return newNum;

};

// Do not edit below this line
module.exports = sumAll;
