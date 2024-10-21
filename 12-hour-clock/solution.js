function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  } else {
    return `${hours}:${minutes} AM`;
  }
}

module.exports = { convertTo12HourClock };
