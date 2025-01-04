function calculatePercentageChange(original, newAmount) {
  const difference = newAmount - original;  
  if(difference === 0) return 0;
  const percentageDifference = (difference / original) * 100;
  return Math.round(percentageDifference);
}

module.exports = { calculatePercentageChange };
