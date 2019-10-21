
/* urlEncode program */

const urlEncode = function(text) {
  text = text.trimLeft();          //remove the spaces on the left of the string
  for (let i =0 ; i < text.length  ; i++) {
if (text[i] === ' '){                                  // check if the string has spaces 
 text = text.substring(0,i) + '%20' + text.substring(i+1)   // cut spaces and add 20%
}}
return text
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));