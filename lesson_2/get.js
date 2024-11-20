// class AutoMobile {
//     _horsePowers = 0; // объявление приавтного свойства _horsePowers со значением 0 используя синтаксис приватных полей


//     set horsePowers(value) { // определение сеттера для сворйства horsePowers
//         if (value < 0) throw new Error('Отрицательное количество сил');
//         this._horsePowers = value; // установка значения свойства _horsePowers;
//     };

//     get horsePowers() { // определение геттера для свойства horsePowers
//         return this._horsePowers; // возвращает значение свойства _horsePowers
//     }

//     constructor(power) { // определение конструктора лкасса
//         this._horsePowers = power; // Установка значения свойства _horsePowers при созщдании объекта класса
//     }
// };

// let auto = new AutoMobile(100); // создание нового объекта класса AutoMobile и передача значения 100 в сконструктор

// auto.horsePowers = 10; // устанавливает значение в отрицательное кол-во сил

class AutoMobile {
    #horsePowers = 0; // приватные свойства. Свойства начинаются с # и имеют приватную защиту на уровне языка.

    set horsePowers(value) {
        if (value < 0) throw new Error('Отрицательное количество сил');
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}
// создаём новую машину
let auto = new AutoMobile(100);
// установка через сеттер 
auto.horsePowers = 50;
console.log(auto.horsePowers);
// установка напрямую
auto.#horsePowers = 10; // выдаст ошибку приватности