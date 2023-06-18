//// splice().... is method sy hum array me new value add ke skty hain or remove b kr skty hain..

var month = ["jan", "march", "april", "may", "jun", "july"];

// month.splice(1,0,"feb");
// month.splice(0,2,"feb");
// console.log(month);
/// slice()...

var newarray = month.slice(2,6);
console.log(month, newarray);