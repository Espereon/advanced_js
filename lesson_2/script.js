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
// const frame = frames[0]; // получает ссылку на фрейм по индексу;
// frames[0].location.href = 'https://www.example.com';

// const frameCount = frames.length;
// const parentWindow = window.parent;

// Работа с globalThis
// const globalObject = globalThis; // получает глобальный объект
// globalThis.newVariable = 'Hello, world!';  // определяет новую глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; // получает доступ к глобальным переменным из разных сред исполнения

// глобальная переменная var
// var glob = 5;
// function increment(val) {
//     return val + 1;
// };
// console.log(window.glob);
// console.log(window.increment);

//alert
// console.log(alert() === window.alert());
// alert('Можно так');
// window.alert('Можно и так');

// const let
// const local = 5;
// let localFun = () => 'localFunc';
// console.log(local);
// console.log(localFun());
// console.log(window.local);
// console.log(window.localFun);

// console.log(window.Symbol.for);
// console.log(window.Symbol.iterator);
// console.log(window.Array.from);