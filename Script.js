document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Toggle completed state
  taskItem.querySelector('.task-text').addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });

  // Delete task
  taskItem.querySelector('.delete-btn').addEventListener('click', function () {
    taskItem.remove();
  });

  document.getElementById('taskList').appendChild(taskItem);
  taskInput.value = '';
});
