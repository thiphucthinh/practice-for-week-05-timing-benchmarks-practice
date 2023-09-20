const [addNums, addManyNums] = require("./phase-1.js");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = [];
  let n = increment;

  for (let i = 0; i < 10; i++) {
    arr.push(addNums(n));
    n += increment;
  }
  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let arr = [];
  let n = increment;

  for (let i = 0; i < 10; i++) {
    arr.push(addManyNums(n));
    n += increment;
  }
  return arr;
}

module.exports = [addNums10, addManyNums10];
