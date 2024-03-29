var toDosObject = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty!")
        } else {
            console.log("My todos:");
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },


    addToDo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();

    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },


    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();

    },

    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        //Case 1: If everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            //Case 2: Otherwise, make everything false
        } else {
            for (var i = 0; i < totalTodos; i++){ 
                this.todos[i].completed = true;
            }

        }
        toDosObject.displayTodos(); 
    }
}; 

toDosObject.addToDo("first"); 
toDosObject.addToDo("second"); 
toDosObject.addToDo("third");
toDosObject.displayTodos(); 
toDosObject.toggleCompleted(2)
toDosObject.toggleAll(); 