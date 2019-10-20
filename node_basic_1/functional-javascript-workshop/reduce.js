function countWords(inputWords) {
  const reducer = function (obj, word) {
    if(!obj[word]) { // if doesn't exist a property in the accumulator
      obj[word] = 1;
    } else {
      obj[word]++; // word exist and increment its count
    }
     return obj;
  };
  return inputWords.reduce(reducer,{});
}

module.exports = countWords


/*
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}
module.exports = countWords
*/
