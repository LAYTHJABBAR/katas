
/* program to repeat numbers*/
let repeatNumbers = function(data) {
  let  layth = [];                    //the final array to print
  data.forEach(function(data){
var numbertorepeat=data[0].toString();   //number that i want to repeat
var counter=data[1].toString();         // how many times to repeat the number
layth.push(numbertorepeat.repeat(counter));
});
return layth.join(' ,')      //return layth as an array

  }
  
console.log(repeatNumbers([[1, 10]]));

console.log(repeatNumbers([[1, 2], [2, 3]]));

console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));