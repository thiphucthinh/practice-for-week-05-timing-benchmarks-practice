const [addNums, addManyNums] = require("./phase-1.js");

function addNums10Timing(increment) {

  let arr = [];
  let n = increment;
;
  for (let i = 0; i < 10; i++) {
    console.time()
    arr.push(addNums(n));
    n += increment;
    console.timeLog();
  }
  console.timeEnd();
  return arr;

}

// Timing
startTime = Date.now();
addNums10Timing(900);
endTime = Date.now();
console.log(`${endTime - startTime}`);


function addManyNums10Timing(increment) {

  let arr = [];
  let n = increment;

  for (let i = 0; i < 10; i++) {
    console.time()
    arr.push(addManyNums(n));
    n += increment;
    console.timeLog();
  }
  console.timeEnd();
  return arr;

}

// Timing
startTime = Date.now();
addManyNums10Timing(900);
endTime = Date.now();
console.log(`${endTime - startTime}`);

/****************************************** */
// n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);

// console.log("\n***********\n");

// n = 1000
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(5000);
