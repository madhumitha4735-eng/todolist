function addTask() {

    // Get the input field
    let input = document.getElementById("taskInput");

    // Get the entered task
    let task = input.value;

    // Check if the input is empty
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = task;

    // Mark task as completed when clicked
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Create Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";

    // Delete the task
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Add Delete button to task
    li.appendChild(deleteBtn);

    // Display the task
    document.getElementById("taskList").appendChild(li);

    // Clear the input box
    input.value = "";
}