/* sums the numbers on the arrays , depending on the condition that included with (odd or even) */
const conditionalSum = (values, condition) => {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) { // > this condation is to find  out the even numbers on the aray 
     sum =sum + values[i] ; sum = sum;
      
    } else if (condition === "odd" && values[i] % 2 === 1 ) {   // > this condation is to find out the odd numbers on the aray
sum =sum + values[i] ; sum = sum;    }
  }
  return sum;   // > return the value of the number summation to the funcation 
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));