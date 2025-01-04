function convertTo12HourClock(time) {
  const hours = parseInt(time.slice(0, 2));
  const minutes = time.slice(-2);
  if (hours === 0) { // midnight
    return `12:${minutes} AM`;
  }
  else if(hours === 12) { // noon
    return `${hours}:${minutes} PM`;
  }
  else if(hours < 12) { // AM
    return `${hours}:${minutes} AM`;
  }
  else { // PM
    return `${hours-12}:${minutes} PM`;
  }
}

module.exports = { convertTo12HourClock };
