// Getting and assigning the elements from HTML to JS
let taskList = document.getElementById("task-list");  // for un-ordered list
let newTask = document.getElementById("new-task");  // for input field
let addTask = document.getElementById("add-task");  // for button

function addNewTask() {

    //remove unwanted whitespace
    let taskValue = newTask.value.trim(); 

    //if there is something in the field, continue
    if(taskValue) {

        // creating the following : <li></li>
        let taskItem = document.createElement('li');

        // with this, we created : <li> <span class = "task-value">  </span>  </li>
        // Create a span to hold the task text
        let taskText = document.createElement('span');
        taskText.classList.add('task-text'); 
        taskText.textContent = taskValue;
        
        // creating this : <div class="task-buttons"> </div>
        let taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons'); 

        // Creating an edit button : <button class= "edit-btn"> </button>
        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');

        //creating image element : <img src= 'path' alt= 'edit' > </img>
        let editIcon = document.createElement('img');
        editIcon.src = './icons/pen.png';
        editIcon.alt = 'Edit';
        //icon size or width
        editIcon.style.width = '15px';

        // adding the icon to the button
        editButton.appendChild(editIcon);

        // creating this: <button class="delete-btn"> </button>
        let removeButton = document.createElement('button');
        removeButton.classList.add('delete-btn');

        //creating this: <img></img>
        let removeIcon = document.createElement('img');
        removeIcon.src = './icons/bin.png';
        removeIcon.alt = 'Remove';
        //icon size
        removeIcon.style.width = '15px'; 

        //adding the icon to the button
        removeButton.appendChild(removeIcon);

        // Append the task text and buttons to the task item
        /*
            <div class="task-buttons">
                <button class= "edit-btn"> </button>
                <button class="delete-btn"> </button>
            </div>
        */
        taskButtons.appendChild(editButton);
        taskButtons.appendChild(removeButton);

        
        // Appending the elements to the taskItem
        /*
            <li>
            
            <li> <span class = "task-value">  </span>  </li>
            <div class="task-buttons"> </div>

            </li>

        */

        taskItem.appendChild(taskText);
        taskItem.appendChild(taskButtons);



        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        newTask.value = "";

        // Add event listener to remove the task
        removeButton.addEventListener('click', function() {
            //removes child from "list"
            taskList.removeChild(taskItem);  
        });

        // Add event listener to edit the task
        editButton.addEventListener('click', function() {
            let newTaskText = prompt("Edit task:", taskText.textContent);  // ask user to edit text
            if(newTaskText !== null && newTaskText.trim() !== "") {
                taskText.textContent = newTaskText.trim();  // Update the task text
            }
        });
    } else {

        //showing alert for user
        alert("Please enter a new task");  
    }
}

// Add event listener for the "Add Task" button click
addTask.addEventListener('click', addNewTask);



const date = new Date();
document.getElementById("time").innerHTML = date.toLocaleDateString();

/*
// playing around with the background of the div
function pinkBg(){
    document.getElementById("container").style.backgroundColor = "#ffb6c1";
}
function yellowBg(){
    document.getElementById("container").style.backgroundColor = "#fafad2";
}
function cyanBg(){
    document.getElementById("container").style.backgroundColor = "#e0ffff";
}
function defaultBg(){
    document.getElementById("container").style.backgroundColor = "#F4F9F9";
}*/