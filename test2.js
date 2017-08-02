/**
 * Test 2
 * Choose one of the following
 */

/**
 * Fix the function so that it returns [4,[1],[2],[3],[4]];
 */

var count = 4;
function foo() {
  var table = [count];
  while (count-- > 0) {
    table.push([count]);//here we've to push an array inside our main array called table
  }
  // To get the desired output there is no need for below for loop.
  // for (var count = 1; count < table.length; count++) {
  //   table[count].push(count);
  // }
  return table;
}

console.log("Solution for TEST 2 ---> (1)",foo());

////////
// OR //
////////

/*
 * The desired result is a countdown from 5 to 0 using console log messages. 
 * Explain why the code only logs -1, then fix the code so it works as expected.
 */
console.log("Solution for TEST 2 ---> (2)");
//As here in this countdown function, we are setting up timeout on a function to execute some time in future 
// so when that function gets execute at that time the value of i will be 6 so that num-i = 5-6 = -1 and that
// value will be consoled.
function countdown (num) {
  //To overcome the problem , Instead of var use let as it creates block level scope
  for (let i = 0; i <= num; i += 1) {
    // if you don't want to use let then use closure by declaring the setTimeout function inside an IIFE and 
    // passing the reference of i as a argument to an IIFE.
    //(function iife(i){
      setTimeout(function () {
        console.log(num - i);
      }, i * 1000);
    //})(i);
  }
}

countdown(5);