// Работа с Sindow

//console.log(window);

//const newWindow = window.open('https://www.example.com', '_blank'); // Открывает новое окно в браузере;

//window.close; закрывает окно

window.resizeTo(800, 600); // изменяет размер окна на 800х600 пикселей;

//window.location.href = 'https://www.example.com' // перенаправляет на указанный адрес

// const windowWidth = window.innerWidth;
// console.log(windowWidth); // получаем ширину/высоту страницы

// const isWindowOpen = window.window.open('https://www.example.com') !== null; // проверяет открыто ли окно

// const windowHeight = window.window.innerHeight; // получает высоту окна
// window.window.location.href = 'https://www.example.com'; // перенаправляет на другую страницу во вложенном окне

// Работа с Self

// const newWindowSelf = self.open('https://www.example.com', '_blank'); // Открывает новое окно браузера с использование self

// self.close();
// self.resizeTo(800, 600);
// self.location.href = 'https://www.example.com';
// по сути функционал выполняет тоже самое что и window.

// Работа с frames
const frame = frames[0]; // получает ссылку на фрейм по индексу;
frames[0].location.href = 'https://www.example.com';

const frameCount = frames.length;
const parentWindow = window.parent;