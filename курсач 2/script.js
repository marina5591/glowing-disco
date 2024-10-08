

const dogContainer = document.querySelector('.dog-container');
const dogs = [
    { name: "Рекс", breed: "Немецкая овчарка", image: "2f6cc6c9149ceaf154574f950a7b155b.png" },
    { name: "Белка", breed: "Йоркширский терьер", image: "1638840419_66-celes-club-p-poroda-sobak-torteler-zhivotnie-krasivo-fo-72.jpg" },
    // ... добавить больше собак
];

dogs.forEach(dog => {
    const dogCard = document.createElement('div');
    dogCard.classList.add('dog-card');
    dogCard.innerHTML = `
        <img src="${dog.image}" alt="${dog.name}">
        <h3>${dog.name}</h3>
        <p>${dog.breed}</p>
    `;
    dogContainer.appendChild(dogCard);
});

// Запускаем анимацию при загрузке страницы
window.addEventListener('load', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-in');
        setTimeout(() => {
            section.classList.add('show');
        }, 100); // Задержка 100 мс 
    });
});


const trainingContainer = document.querySelector('.training-container');
const trainings = [
    { name: "Общий курс дрессировки", description: "Обучение базовым командам", date: "2024-03-10", time: "10:00" },
    { name: "Курс послушания", description: "Повышение послушания собаки", date: "2024-03-15", time: "16:00" },
    { name: "Курс фристайла", description: "Обучение трюкам и элементам фристайла", date: "2024-03-20", time: "18:00" },
    // ... добавить больше тренировок
];

trainings.forEach(training => {
    const trainingCard = document.createElement('div');
    trainingCard.classList.add('training-card');
    trainingCard.innerHTML = `
        <h3>${training.name}</h3>
        <p>${training.description}</p>
        <p>Дата: ${training.date}, Время: ${training.time}</p>
    `;
    trainingContainer.appendChild(trainingCard);
});


const addDogButton = document.getElementById('addDogButton');
const addDogModal = document.getElementById('addDogModal');
const closeButton = document.querySelector('.close');

// Открытие модального окна при нажатии на кнопку
addDogButton.addEventListener('click', () => {
  addDogModal.style.display = 'block';
});

// Закрытие модального окна при нажатии на крестик
closeButton.onclick = function() {
  addDogModal.style.display = 'none';
}

// Закрытие модального окна при клике за пределами окна
window.onclick = function(event) {
  if (event.target == addDogModal) {
    addDogModal.style.display = 'none';
  }
}

// Обработка формы добавления собаки
const addDogForm = document.getElementById('addDogForm');
addDogForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const name = document.getElementById('name').value;
  const breed = document.getElementById('breed').value;
  const image = document.getElementById('image').value;

  // Добавляем собаку в массив
  dogs.push({ name: name, breed: breed, image: image });

  // Очищаем форму
  addDogForm.reset();

  // Обновляем список собак на странице
  updateDogList();

  // Закрываем модальное окно
  addDogModal.style.display = 'none';
});

// Функция обновления списка собак
function updateDogList() {
  // Очищаем существующий список собак
  dogContainer.innerHTML = '';

  // Перерисовываем список собак
  dogs.forEach(dog => {
    const dogCard = document.createElement('div');
    dogCard.classList.add('dog-card');
    dogCard.innerHTML = `
        <img src="${dog.image}" alt="${dog.name}" onerror="this.onerror=null; this.src='no_image.jpg'; this.alt='Изображение недоступно';"> 
        <h3>${dog.name}</h3>
        <p>${dog.breed}</p>
    `;
    dogContainer.appendChild(dogCard);
  });
}
