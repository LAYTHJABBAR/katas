/* program to calculate change to pay back*/

var calculateChange = function(total, cash) {
  var leftchange = cash - total
  var outchange = ""
  var tenChange = "ten: "
  var com = ", "
  var Arraychange = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var changesnames = ["twenty: ", "ten: ", "five: ", "twoDollar: ",
  "dollar: ", "quarter: ", "dime: ", "nickel: ", "penny: "]

for(i = 0; i <= Arraychange.length; i++) {
  if(leftchange - Arraychange[i] > 0) {
    outchange += changesnames[i] += Math.floor(leftchange / Arraychange[i]);
    if(i <= Arraychange.length - 2) {
      outchange += com;
    }
    leftchange -= (Math.floor(leftchange / Arraychange[i]) * Arraychange[i]);
  }
};
return outchange;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));