let numberOfVowels = function(data) {
  let layth = data.toString();  //turn the data input to string
  let counOfvowel = 0;
  for (let i = 0; i <= layth.length; i++) {
	      if (layth.charAt(i) == "a" || layth.charAt(i) == "e" || layth.charAt(i) == "i" 
		|| layth.charAt(i) == "o" || layth.charAt(i) == "u"){
		   counOfvowel = counOfvowel + 1; // if a vowel add 1 to the vowel
 }}
return counOfvowel  }
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou")); 