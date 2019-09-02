// for (var i = 0; i < 20; i++){
// console.log("hi");
// }


// var testArray = ["ava", "jake", "grady"]; 
// for (var i = 0; i < testArray.length; i++) {
//     console.log(testArray[i]);
// }


var toDosObject = {
    todos: [],
    displayTodos: function() {
    if (this.todos.length === 0) {
        console.log("Your todo list is empty!")
    } else {
        console.log("My todos:");
        for (var i = 0; i < this.todos.length; i++) {           
            if (this.todos[i].completed === true) {
        console.log('(x)',this.todos[i].todoText); 
            } else {
        console.log('( )', this.todos[i].todoText); 
    }
        }
    }
},


    addToDo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
        this.displayTodos(); 
    },

    changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; 
    this.displayTodos();

    },

    deleteTodo: function(position) { 
        this.todos.splice(position, 1); 
        this.displayTodos();
    },


toggleCompleted: function(position) {
    var todo = this.todos[position]; //var todo makes the code easier to read 
    todo.completed = !todo.completed;
    this.displayTodos();

}

}
toDosObject.displayTodos(); 
toDosObject.addToDo("second", "third", "fourth");  
// toDosObject.deleteTodo(0); 
toDosObject.toggleCompleted(0);
toDosObject.toggleCompleted(0);
toDosObject.toggleCompleted(0);

//I can only get the toggleCompleted/ addToDo to work with only one argument.
//How can I change my code so that it works with adding multiple todos? Do I need empty brackets?