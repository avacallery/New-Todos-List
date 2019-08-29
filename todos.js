var toDoList = ["go to CareerDevs", "go to The Columbus", "watch OITNB"]; 

//function to display to-dos
function displayToDoList() {
    console.log("What I have to do today:", toDoList);
}
displayToDoList(); 

//function to add to-dos
function addToDo(todo) { 
    toDoList.push(todo);
    displayToDoList(); 
}

addToDo("makeout"); 

//function to change to-dos 
function changeToDo(position, newValue) {
    toDoList[0] = "snuggle wit boo"; 
    displayToDoList();
}

changeToDo();

//function to change to delete to-dos
function deleteToDo(position) {
    toDoList.splice(3, 1);
    displayToDoList()
}

deleteToDo(); 

//OBJECTS

var avaObject = { 
    name: "Ava",
    sayName: function() { 
        console.log(this.name);
//this is referring to the whole object
    }
}
avaObject.sayName(); 


var toDosObject = {
    todos: ["this and that", " also some of this"],
    displayDumbList: function() {
        console.log(this.todos);
    }
}

toDosObject.displayDumbList();