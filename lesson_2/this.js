// // обычная функция
// function regularFunction() {
//     console.log(this);
// };

// // стрелочная функция
// const arrowFunction = () => {
//     console.log(this);
// };

// regularFunction(); // выводит контекст выполнения, например, объект Window (в браузере) или Global (в node.js)

// arrowFunction(); // выводит контекст выполнения, который был определён во время создания функции (лексический контекст)

// // внутри объекта

const obj = {
    regularFunction: function () {
        console.log(this);
    },
    arrowFunction: () => {
        console.log(this);
    }
};

obj.regularFunction(); // выводит объект obj, так как метод вызывается на объекте obj

obj.arrowFunction(); // выводит конспект выполнения, в котором была создана стрелочная функция (наример, объект Window  или объект Global);