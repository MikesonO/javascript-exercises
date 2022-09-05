const { add } = require("../08_calculator/calculator");

const fibonacci = function(number) {

let fibo = 1;
let add = 1;
let fiboAdd = 0;

if(number < 0){
  return "OOPS";
} else if (typeof number === "string" ){
  parseInt(number);
}

for(let i = 1; i < number; i++){
 
  fiboAdd = fibo + add; // = 2
  if (i >= 1){
  fibo = add;
}
  add = fiboAdd;
}
return fibo;
}






// Do not edit below this line
module.exports = fibonacci;
