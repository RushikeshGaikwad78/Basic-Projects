console.log("Enter 'new' to add a new todo");
console.log("Enter 'list' to list todos");
console.log("Enter 'delete' to delete a todo");
console.log("Enter 'quit' to Quit App");

let todos = [];

let task;

while ((task = prompt("Enter the task you want to perform:").toLowerCase()) !== "quit") {
    if (task === "new") {
        let todo = prompt("Enter your todo");
        todos.push(todo);
        console.log("TODO ADDED SUCCESSFULLY!!!");
    } else if (task === "list") {
        console.log("YOUR TODOS LIST IS:");

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}. ${todos[i]}`);
        }
    } else if (task === "delete") {
        let index = prompt("Enter the index of the todo to be deleted:");

        if (index >= 1 && index <= todos.length) {
            todos.splice(index - 1, 1);
            console.log("Todo successfully removed!!!");
        } else {
            console.log("Invalid index. No todo removed.");
        }
    } else {
        console.log("Invalid input. Please enter a valid command.");
    }
}
