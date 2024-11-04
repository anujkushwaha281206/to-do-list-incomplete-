document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add');
    const inputField = document.getElementById('list');
    const taskList = document.createElement('ul'); 
    document.body.appendChild(taskList);

    addButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const taskValue = inputField.value.trim(); 
        if (taskValue) { 
            const listItem = document.createElement('li'); 
            listItem.textContent = taskValue; 

            const deleteButton = document.createElement('button'); 
            deleteButton.textContent = 'Delete'; 
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem); 
            });

            listItem.appendChild(deleteButton); 
            taskList.appendChild(listItem); 

            inputField.value = ''; 
        } else {
            alert('Please enter a task.'); 
        }
    });
});