function runWithDebugger(ourFunction) {
    debugger; 
    ourFunction();
}

runWithDebugger(function logTenNumbers() {
    for (i = 0; i < 10; i++) {
    console.log(i); 
    }
}); 


//alarm clock
setTimeout(function() {
    console.log("Wake up Ava!");
}, 5000); 


// //forEach
var students = ["jonathan", "jenny", "elliot"]; 
function logName(name) {
    console.log(name);
}
// console.log(logName(0));

// for (var i=0; i< students.length; i++) {
// logName(students[i]); 
// }
// //
// students.forEach(function(name) {
//     console.log(name);
// }); 

//we want forEach function to run on every item in the array
function forEach(myArray, myFunction) {
    for (var i =0; i < myArray.length; i++) {
        myFunction(myArray[i]); 
    }
}

forEach(students, function(student) {
    console.log(student);
})

//OR

forEach(students, logName);

//$0 will reference what you clicked inspect on in the browser

