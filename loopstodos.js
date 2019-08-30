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
    }

}
toDosObject.displayTodos(); 
toDosObject.addToDo("first");  
toDosObject.deleteTodo(0); 