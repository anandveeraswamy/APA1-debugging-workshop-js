function sumDigits(num) {
  let sum = 0;
  while(num >= 1) {
    sum += num % 10;
    num = Math.trunc(num / 10);    
  }
  return sum;
}

module.exports = { sumDigits };
