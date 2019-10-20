function doubleAll(numbers) {
  return numbers.map(x => x * 2);
}

module.exports = doubleAll;


/*
module.exports = function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2
  })
}
*/
