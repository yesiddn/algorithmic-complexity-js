function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
} // This function has a space complexity of O(1) because it only uses a constant amount of space.

function repeat(arr) {
  let newArray = [...arr];
  return newArray;
} // This function has a space complexity of O(n) because it creates a new array that is the same size as the input array.

function turnIntoString(arr) { // array of numbers
  let result = arr.map(element => element.toString());
  return result; // array of strings
} // This function has a space complexity of O(n) because it creates a new array that is the same size as the input array.

function bidimensionalArray(value) {
  let result = new Array(value);
  for (let i = 0; i < value; i++) {
    result[i] = new Array(value).fill(0);
  }

  return result;
} // This function has a space complexity of O(n^2) because it creates a bidimensional array with n elements.
