function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  newAngle = 0;
  if(Math.abs(rotation) > 360) {
    rotation = rotation % 360;
  }
  if(rotation < 0) {
    if(initialAngle > Math.abs(rotation)) {
      newAngle = initialAngle + rotation;
    }
    else {
      newAngle = 360 + (initialAngle + rotation);
    }
     // newAngle = 360 + (initialAngle + rotation);
  }
  else {
    newAngle = (initialAngle + rotation) % 360;
  } 

  return newAngle;
}

module.exports = { rotateAngleByDegrees };
