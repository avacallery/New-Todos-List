//OBJECTS

var avaObject = { 
    name: "Ava",
    sayName: function() { 
        console.log(this.name);
//this is referring to the whole object
    }
}
avaObject.sayName(); 

///


var toDosObject = {
    todos: [],
    displaytoTodos: function() {
        console.log("My todos", this.todos);
    },

//don't we have to call the function outside of the object?

//BOOLEANS
addTodoList: function(toDoTextPerameter) { 
    this.todos.push({
        toDoText: toDoTextPerameter, //this is going to be equal to whatever passes thru as a perameter
        completed: false
    });
    this.displaytoTodos();
}, 

changeToDo: function(position, toDoTextPerameter) {
    this.todos[position].todoText = toDoTextPerameter;
    this.displaytoTodos(); 

},

toggleCompleted: function(position) {
    var todo = this.todos[position]; //var todo makes the code easier to read 
    todo.completed = !todo.completed; 
    this.displaytoTodos();

}

};
    //toDosObject.toggleCompleted(); 
    toDosObject.addTodoList("boolean testing");
    toDosObject.changeToDo(0, "first try"); 
    toDosObject.toggleCompleted(0);



console.log(!true) //boolean!!!