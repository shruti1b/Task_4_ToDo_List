// Get references to elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add event listener to 'Add Task' button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the input value

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
