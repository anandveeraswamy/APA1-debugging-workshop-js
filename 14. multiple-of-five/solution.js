function getLastDigit(num) {
  return num.toString().slice(-1);
}

function isMultipleOfFive(n) {
  return n % 5 === 0;
}
console.log(isMultipleOfFive(0) );
module.exports = { isMultipleOfFive };
