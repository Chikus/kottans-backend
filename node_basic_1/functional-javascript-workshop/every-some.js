function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}

module.exports = checkUsersValid
/*
Array.prototype.entries()
    Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Array.prototype.every()
    Returns true if every element in this array satisfies the provided testing function.

    function isBelowThreshold(currentValue) {
      return currentValue < 40;
    }
    var array1 = [1, 30, 39, 29, 10, 13];
    console.log(array1.every(isBelowThreshold)); // True

Array.prototype.filter()
    Creates a new array with all of the elements of this array for which the provided filtering function returns true.
Array.prototype.find()
    Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
Array.prototype.findIndex()
    Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
Array.prototype.forEach()
    Calls a function for each element in the array.
Array.prototype.keys()
    Returns a new Array Iterator that contains the keys for each index in the array.
Array.prototype.map()
    Creates a new array with the results of calling a provided function on every element in this array.
Array.prototype.reduce()
    Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
Array.prototype.reduceRight()
    Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
Array.prototype.some()
    Returns true if at least one element in this array satisfies the provided testing function.
Array.prototype.values()
    Returns a new Array Iterator object that contains the values for each index in the array.
Array.prototype[@@iterator]()
    Returns a new Array Iterator object that contains the values for each index in the array.
*/
