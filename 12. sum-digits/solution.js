function sumDigits(num) {
  let sum = 0;
  while(num > 0) {
    sum += num % 10;
    num /= 10;
  }
  return sum;
}
console.log(sumDigits(103));

module.exports = { sumDigits };
