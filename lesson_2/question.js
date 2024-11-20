// Объект с объектом внутри
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York'

    },
    contacts: {
        email: 'john@example.com',
        phone: '+134567489'
    }
};
// опциональная цепочка вызовов методов
const email = user?.contacts?.email;
console.log(email); // выводит почту

// Если значение не определено или равно null или undefinded, используется значение по умоплчанию 
const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); // выводит 'Default Value', так как свойство 'otherValue  не существует в объекте user
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName); // выводит улицу, или unknown, если значения не было бы