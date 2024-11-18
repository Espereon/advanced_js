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

const chefsMap = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"],
]);
const ordersMap = new Map();

const client1 = { name: "Алексей" };
const client2 = { name: "Мария" };
const client3 = { name: "Ирина" };

ordersMap.set(client1, ["Пицца 'Пепперони'", "Тирамису"]);
ordersMap.set(client2, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
ordersMap.set(client3, ["Чизкейк"]);
console.log(ordersMap);

ordersMap.forEach((order, client) => {
    console.log(`Клиент ${client.name} заказал: ${order}`);
});