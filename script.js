var toDosObject = {
    todos: [],
    // displayTodos: function () {
    //     //   debugger;
    //     if (this.todos.length === 0) {
    //         console.log("Your todo list is empty!")
    //     } else {
    //         console.log("My todos:");
    //         for (var i = 0; i < this.todos.length; i++) {
    //             if (this.todos[i].completed === true) {
    //                 console.log('(x)', this.todos[i].todoText);
    //             } else {
    //                 console.log('( )', this.todos[i].todoText);
    //             }
    //         }
    //     }
    // },
    addToDo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        // this.displayTodos();
    },

    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        // this.displayTodos();

    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        // this.displayTodos();
    },

    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        // this.displayTodos();

    },

    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }
        
        //We want to iterate over this.todos
        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
                }
        });

        //Case 1: If everything is true, make everything false
        if (completedTodos === totalTodos) {
            // for (var i = 0; i < totalTodos; i++) {
            //     this.todos[i].completed = false;
            // }
            this.todos.forEach(function(todo) {
                todo.completed = false; 


            });



            //Case 2: Otherwise, make everything false
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        // toDosObject.displayTodos();
    }
};

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        toDosObject.addToDo(addTodoTextInput.value);
        addTodoTextInput.value = ""; //this sets it to nothing after runs
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");

        toDosObject.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function (position) {
        toDosObject.deleteTodo(position);
        view.displayTodos();
    },
    //this passes the position and takes that position to use it to 
    //delete the item 

    toggleAll: function () {
        toDosObject.toggleAll();
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        toDosObject.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ""; // clears list
        for (var i = 0; i < toDosObject.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = toDosObject.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.id = i;
            //display todos is gonna iterate over our todos
            //so i is gonna be equal to each position in our array
            //and id accesses the element's id
            //there should only be ONE id with this title
            todoLi.textContent = todoTextWithCompletion;
            //we want to append our delete button to TodoLi 
            todoLi.appendChild(this.createDeleteButton());
            //shows the text for whatever you add to the list
            todosUl.appendChild(todoLi);
        }


        //instead of adding an eventListener on every single delete button, you can add one single one on the closing Ul element and listen for clicks there. Whenever something is clicked on the Ul, like the delete button, you can look at the event Object to see excactly the element that is clicked on. If it is a delete button - we are running the handlers.deleteTodo. 
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (event){
            var elementClicked = event.target;

            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        }); 
    }
};

view.setUpEventListeners(); 







// var todosUl = document.querySelector('ul');

// todosUl.addEventListener("click", function (event) {
//     // console.log(event.target.parentNode.id);

//     //function() in line 140 is the CALLBACK function inside of addEventListener, which is the HIGHER ORDER FUNCTION it's the function that takes other functions
//     //when it runs function() it's gonna pass an eventObject 
//     //What is this doing? When someone clicks on the delete button, addEventListener will run our callback function and pass in the eventObject, when you log out the event (target is what you clicked on/ Li element is the parentNode, and then the id, which is what we need to delete a specific item). 


//     //Get the element that was clicked on
//     var elementClicked = event.target; //event.target is the item clicked
//     //check if elementClicked is a delete button 
//     if (elementClicked.className === "deleteButton") {
//         handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
//     }
// });

// //v10_li_elements
// v11_nested_functions
// v12_return_statement
// v13_click_to_delete
// v1_functions
// v3_objects
// v4_booleans
// v5_loops
// v6_toggleAll
// v7_javascript_data_types
// v8_HTML_DOM
// v9_inputs