// this implementation is working...

function textInDiv(text, maxWidth) {
  //if (maxWidth < 15) return "INVALID INPUT";
  let formattedText = "";
  while (maxWidth < text.length) {
    let splitPoint = text.lastIndexOf(" ", maxWidth);
    if(splitPoint === -1) {
      return text;
    } 
    formattedText += text.slice(0, splitPoint) + "\n";
    text = text.slice(splitPoint).trimStart();    
  }

  formattedText = formattedText + text;
  return formattedText;
}

console.log(textInDiv("Supercalifragilisticexpialidocious thisdfsdf", 10));
module.exports = { textInDiv };
