//1. Objects (can be as complex as you want
// {} , //todoList, arrays, functions

//2. Primitives (building blocks)
//Strings "text" , numbers 1234 , booleans true false , undefined (a value that hasn't been set yet), null or "nothing"

// COMPARISONS WITH PRIMITIVE DATA TYPES 
// ...It's just like math! 

// ava === ava true
// ava === ava1 false 
// 100 === 100 true
// undefined === undefined true
// null === null true 

// COMPARISONS WITH OBJECTS 
// ...It will make you wanna die! 

// console.log({} === {}) FALSE 
// console.log([1,2,3]===[1,2,3]) FALSE
// objects vs. primitive comparisons : javascript doesn't care that the houses look the same, it cares about the addresses. If you are talking about seperate houses, it will be false. If it is the same house, the comparisons will be the same. 

//Are we looking at the same object or different objects? 
var houseA = {}; 
console.log(houseA === houseA) // this will be true 

var myPrimitive = 10; 
var myObject = {name: "ava"}; 
//{name: "ava"} is the memory address for the object

var myHouse = {color: "blue"}; 
var color = myHouse.color;
color = "red"; 

console.log(myHouse); //this will run as {color:'red'}
console.log(myHouse.color); //blue

//I got this shit wrong cuz I wasn't thinking like a computer 

var myHouse1 = {color: "blue"}; 
var myHouse2 = myHouse1; 
myHouse2.color = "red";
console.log(myHouse1.color); //red 
console.log(myHouse2.color); //red 

var myHouse3 = {color: "blue"}; 
var myHouse4 = {color: "blue"}; 
myHouse4.color = "red"; 

console.log(myHouse4); //red
console.log(myHouse3); //blue