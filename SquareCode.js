const squareCode = function(message) {
  let squers = '';
  message = message.replace(/ /g, '');
  let stringArr = [];
  let column = Math.ceil(Math.sqrt(message.length));
  while (message !== '') {
    stringArr.push(message.slice(0, column));
    message = message.slice(column, message.length);
  }
  for (let i = 0; i < stringArr[0].length; i++){
    squers += stringArr[0][i];
    for (let j = 1; j < stringArr.length; j++){
      if (stringArr[j][i]){
        squers += stringArr[j][i];
      }
    } 
    squers += ' ';
  }
  return squers;
};
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));