function countChar(string, char) {
  let i = 0;
  let count = 0;
  for (const character of string) {
    if( character === char) {
      count++;
    }
  }
  return count;
}

module.exports = { countChar };
