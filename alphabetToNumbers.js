function alphabetPosition(text) {
  const ab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let textToChars = text.toLowerCase().split("");
  let answer = [];
  for (let i = 0; i < text.length; i++) {
      if (ab.indexOf(textToChars[i]) != -1) {
          answer.push(ab.indexOf(textToChars[i]) + 1);
      }      
}
return answer.join(" ");
}
// Expected output of function is "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (A string not an array)


alphabetPosition("The sunset sets at twelve o' clock.");