function findCentury(year) {  
  const century = Math.floor((year - 1) / 100) + 1;
  return century + getOrdinalSuffix(century);
}

function getLastTwoDigits(num) {
  return Math.abs(num % 100);
}

function getOrdinalSuffix(n) {
  if(getLastTwoDigits(n) === 11 || 
     getLastTwoDigits(n) === 12 || 
     getLastTwoDigits(n) === 13
    ) {
      return "th";
    }
  
  const lastDigit = n % 10;

  if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  } else {
    return "th";
  }
}

console.log(getOrdinalSuffix(12));

module.exports = { findCentury, getOrdinalSuffix };
