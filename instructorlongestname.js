/* finding instrucor longest name*/
const instructorWithLongestName = function(instructors) {
var longestname = 0            // counter of instructor name's charecters by index 
var layth = 0                   //index counter
for (var i=0 ;i < instructors.length ; i++)
{
if ( (instructors[i].name).length > longestname ){
	longestname = (instructors[i].name).length ; 
layth = i
}}
return instructors [layth]
return instructors [i]
}
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
	{name: "Domascus", course: "Web"},
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
]));