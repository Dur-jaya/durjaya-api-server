// public/script.js
document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;

  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  const data = await response.json();
  alert(`Task created: ${data.title}`);
  loadTasks();
});

async function loadTasks() {
  const response = await fetch('/api/tasks');
  const tasks = await response.json();

  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title + (task.completed ? ' ✅' : '');
    taskList.appendChild(li);
  });
}

loadTasks();
