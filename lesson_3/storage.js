// // Установка и получения значений из LocalStorage

// // Установка значения в LocalStorage
// localStorage.setItem('username', 'Jhon');

// // получение значений из LocalStorage
// let storedUsername = localStorage.getItem('username');
// console.log('Значение из LocalStorage:', username);

// // Удаление
// localStorage.removeItem('username');

// // проверка, что значение удалено
// let storedUsername2 = localStorage.getItem('username');
// console.log('Значение из LocalStorage', storedUsername2);

// // очистить localstorage
// localStorage.clear();

// // проверяем что localStorage пустой
// console.log('LocalStorage:', localStorage);

// проверяем есть ли значение счётчика в консоли
if (localStorage.getItem('counter')) {
    // если значение счетчика уже есть, увеличиваем его на 1
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    // Если значение счетчика не существует, устанавливаем его в 1
    localStorage.setItem('counter', '1');
};

// выводим значение счётчика в консоль
console.log('Счетчик посещений:', localStorage.getItem('counter'));

// localStorage.clear();

// короткий вариант записи
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// обновляем значение счетчика и сохраняем его в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};

// выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

// обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});