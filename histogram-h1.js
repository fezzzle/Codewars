function histogram(results) {

  let histogramWithHashtags = '\n';

  for (let i = results.length -1; i >= 0; i--) {
      if (results[i] === 0) {
          histogramWithHashtags += i + 1 + "|" + "\n";
      }
      let saveLastIndex;
      for (let j = results[i]; j >= 1; j--) {
          if (results[i] === j) {
              saveArrayLastIndex = j;
              histogramWithHashtags += i + 1 + "|";
          } if (j === 1) {
              histogramWithHashtags += "#" + " " + saveArrayLastIndex + "\n";
          } else {
              histogramWithHashtags += "#";
          }
      }
  }
  return histogramWithHashtags;
}
histogram([7, 3, 10, 1, 0, 5]);
