const musicCollection = [
    {
        title: "Туда сюда",
        artist: "Игорь Потов",
        year: "1941"
    },
    {
        title: "Не туда ни сюда",
        artist: "Потов Гигорь",
        year: "1985"
    },
    {
        title: "Сюда ни туда",
        artist: "Вотоп Риго",
        year: "2000"
    },
    {
        title: "Туда вот сюда",
        artist: "Виго Ротоп",
        year: "2021"
    }
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true };
        }
    }
};

for (let album of musicCollection) {
    console.log(`Название: ${album.title}, автор: ${album.artist}, год издания: ${album.year}`);
};



const menu = new Map();
menu.set('Виктор', ['Пицца "Маргарита"', 'Пицца "Пепперони"']).set('Ольга', ['Суши "Филадельфия"', 'Суши "Калифорния"']).set('Дмитрий', ['Тирамису', 'Чизкейк']);

const orders = new Map();
orders.set('Алексей', ['Пицца "Пепперони"', 'Тирамису']).set('Мария', ['Суши "Филадельфия"', 'Пицца "Маргарита"']).set('Ирина', 'Чизкейк');

orders.forEach((value, key) => {
    console.log(`Клиент ${key} заказал ${value}`);
});

// console.log(orders.values());
for (let order of orders.values()) {
console.log(order);}