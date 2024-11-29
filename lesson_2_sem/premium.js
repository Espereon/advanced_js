class User {
    #name;
    #family;
    constructor(name, family) {
        this.#name = name;
        this.#family = family;
    }

    get name() {
        return this.#name;
    }

    get family() {
        return this.#family;
    }
}

class RegularUser extends User {
    constructor(name, family) {
        super(name, family);
    }
}

class PremiumUser extends User {
    constructor(name, family) {
        super(name, family);
    }
    premiumAccount = null;
    setPremiunAccount() {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
    }
}

// создать RegularUser

function getAccountInfo(user) {
    // Премиум аккаунт действителен до такой-то даты или информация отсутствует
    // пользователь без премиум аккаунта
    // Тип пользователя не определен"
    if (user instanceof PremiumUser) {
        console.log(
            `${new Date(user.premiumAccount).toLocaleDateString()}` ?? 'Информация отсутствует',
            user.name,
            user.family
        );
    } else if (user instanceof RegularUser) {
        console.log('Пользователь без премиум аккаунта', user.name, user.family);
    } else {
        console.log('Тип пользователя не определен');
    }
}

// Проверка
const regular = new RegularUser('Вася', 'Иванов');
const premium = new PremiumUser('Оля', 'Олина');
premium.setPremiunAccount();
const premiumLim = new PremiumUser('Поля', 'Гагарина');

getAccountInfo(regular);
getAccountInfo(premium);
getAccountInfo(premium);