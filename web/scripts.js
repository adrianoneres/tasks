const emojis = [
  '&#128512;',
  '&#128556;',
  '&#128514;',
  '&#129312;',
  '&#128516;',
  '&#128517;',
  '&#128518;',
  '&#128519;',
  '&#128526;',
  '&#128540;',
];

const api = 'http://localhost:3000/api';

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * (emojis.length - 1));
  return emojis[randomIndex];
}

async function listTasks() {
  const { data } = await axios.get(`${api}/tasks`);

  data.forEach(task => {
    addTaskArticle(task.description);
  });
}

async function saveTask() {
  let description = document.getElementById('description').value;
  
  await axios.post(`${api}/tasks`, { description });
  addTaskArticle(description);

  document.getElementById('description').value = '';
}

function addTaskArticle(description) {
  let spanEmoji = document.createElement('span');
  spanEmoji.innerHTML = getRandomEmoji();

  let spanDescription = document.createElement('span');
  spanDescription.innerHTML = description;

  let article = document.createElement('article');
  article.classList.add('task');
  article.appendChild(spanEmoji);
  article.appendChild(spanDescription);

  document.getElementById('tasks').appendChild(article);
}

document.getElementById('new').addEventListener('submit', function(event) {
  event.preventDefault();
  saveTask();
});

listTasks();