// Приватное свойство для хранения баланса
class BankAccount {
    #balance = 0;
    constructor(amount) {
        if (amount < 0) {
            throw new Error('Отрицательный баланс для иннициализации счета');
        }
        this.#balance = amount;
    }
    // Геттер для получения текущего баланса
    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        this.#balance = amount;
    }
    // Метод для внесения денег на счет    
    deposit(cash) {
        if (cash <= 0) {
            throw new Error('Сумма для депозита должна быть больше 0');
        }
        this.#balance += cash;
        return this.#balance;
    }
    // withdraw(amount) Метод для снятия денег со счета
    withdraw(cash) {
        if (cash <= 0) {
            throw new Error('Сумма для снятия должна быть больше 0');
        }
        if (this.#balance - cash < 0) {
            throw new Error('Сумма для снятия больше суммы счета');
        }
        this.#balance -= cash;
        return this.#balance;
    }
}

let account = new BankAccount(500);
// account.balance = 300;
// console.log(account)
console.log(account.balance); // Выводит: 500

account.deposit(200);
console.log(account.balance); // Выводит: 700

account.withdraw(100);
console.log(account.balance); // Выводит: 600