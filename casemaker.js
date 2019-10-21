/* this program for muliblication pro.*/
const multiplicationTable = function(maxValue) {
    let result = '\n'
for ( var i = 1 ; i <= maxValue ; i ++){ // this counter for the number
    for(var j =1 ; j<= maxValue ; j ++){ // this counter for repeating

        result = result +(i*j) + ' ';
    }
     result = result  + '\n';
}
return result;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));