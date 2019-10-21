let talkingCalendar = function(date) {
let datefinal= [];
 let nameofmonnth = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'];
let year =  date.substring(0,4) ;
let month =  date.substring(5,7) ;
let day =  date.substring(8) ;
month[0] === '0' ? month= nameofmonnth[month[1]-1] : month = nameofmonnth[month - 1];
 if( (day[0] == 1 && day[1] ==1) || (day[0] == 1 && day[1] == 2) || (day[0] == 1 && day[1] == 3))

 {
 	day = day + 'th';
 }else if (day[0,1] == 02 || day[0,1] == 22) {

 day = day + 'nd';
 } 
 else if ( day[0,1] == 03 || day[0,1] == 23) {
 	day = day + 'rd';
 }
 else if ( day[0,1] == 01 || day[0,1] == 21 || day[0,1] == 31){
 	day = day + 'st';
 }else{
 	day = day + 'th';
 }
 return `${month} ${day} ${year}`
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));