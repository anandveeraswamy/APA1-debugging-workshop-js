// this implementation is working...

function textInDiv(text, maxWidth) {
  if (maxWidth < 15) return "INVALID INPUT";
  let formattedText = "";
  while (maxWidth < text.length) {
    const splitPoint = text.lastIndexOf("", maxWidth);
    formattedText += text.slice(0, splitPoint) + "\n";
    text = text.slice(splitPoint);
  }

  formattedText = formattedText + text;
  return formattedText;
}

module.exports = { textInDiv };
