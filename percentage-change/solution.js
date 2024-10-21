function calculatePercentageChange(original, newAmount) {
  const difference = Math.abs(newAmount - original);
  const average = (original - newAmount) / 2;
  const percentageDifference = (average / difference) * 100;
  return percentageDifference.toFixed(2);
}

module.exports = { calculatePercentageChange };
