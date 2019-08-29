// for (var i = 0; i < 20; i++){
// console.log("hi");
// }


// var testArray = ["ava", "jake", "grady"]; 
// for (var i = 0; i < testArray.length; i++) {
//     console.log(testArray[i]);
// }


var toDosObject = {
    todos: [],
    displaytoTodos: function() {
        console.log("My todos:");
        for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText); 

        }
    },

    addToDo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
        this.displaytoTodos(); 
    }

}

toDosObject.addToDo("first", "second"); 

