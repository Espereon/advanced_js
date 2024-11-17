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
// console.log(range);
// let arr = Array.from(musicCollection);
// console.log(arr);


musicCollection[Symbol.iterator] = function () {
    return {
        current: this.title,
        last: this.year,
        next() {
            return this.current <= this.last ? { done: false, value: this.current++ } :
                { done: true };
        }
    };
};

for (let album of musicCollection) {
    console.log(album);
}
