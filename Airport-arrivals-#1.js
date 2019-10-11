// Declare an alphabet
let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';


let flapDisplay = function(lines, rotors) {
  // Alphabet from string to array
  
  // Separate lines array chars from one another
  const getSeparatedLines = function(lines) {
    return lines.join().split('');
  }
  
  const findIndicesForInputWord = function(input) {
    const indices = [];
    for (let i = 0; i < input.length; i++) {
      indices.push(alphabetToArr.indexOf(input[i]));
    }
    return indices;
  }

  // Declare variable to save lines array
  const inputWord = getSeparatedLines(lines);

  const flattenRotor = function(rotors) {
    return rotors.reduce((a, b) => a.concat(b), []);
  }

  // Save flatted rotors
  const flattedRotors = flattenRotor(rotors);

  // Main function
  const getNewWordIndices = function(flattedRotors) {

    let answer = [];
    let indices = findIndicesForInputWord(inputWord);
    const len = indices.length;
    answer = indices;

    for (let i = 0; i < len; i++) {
      for (let n = len -1;  n >= i; n--) {
        answer[n] = flattedRotors[i] + answer[n];
      }
    }

    //Check if all indices are within alphabet length
    for (let n = 0; n < answer.length; n++) {
      if (answer[n] > alphabetToArr.length) {
        answer[n] = answer[n] - alphabetToArr.length;
      }
    }
    return answer;
  }

  const saveNewWordIndices = getNewWordIndices(flattedRotors);

  const getNewWord = function() {
    let arrLen = alphabetToArr.length;
    let word = [];
    
    for (let i = 0; i < arrLen; i++) {
      if (saveNewWordIndices[i] > arrLen) {
        word.push(alphabetToArr[saveNewWordIndices[i]]); 
      } else if (alphabetToArr[saveNewWordIndices[i]]) {
        word.push(alphabetToArr[saveNewWordIndices[i]]); 
      }
    }
    return word.join('').split();
    }
    return getNewWord();
}

flapDisplay(["CODE"], [[1, 13, 27]]);