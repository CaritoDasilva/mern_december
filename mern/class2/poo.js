class BankAccount {
    constructor(id, userName, password, initialCredit, numberAccount, email) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.credit = initialCredit;
        this.numberAccount = numberAccount;
        this.email = email;
        this.clientType = 'standard';
    }

    validatePassword(password) {
        if(password === this.password) {
            return true;
        } else {
            return false;
        }
    };

    payBills(amount, type) {
        this.credit -= amount;
        console.log(`Ha pagado la cuenta de ${type}`);
    }

    creditWithdraw(amount, password) {
        this.validatePassword(password) ? this.credit -= amount : console.log('Contraseña incorrecta');
        console.log(`Su saldo actual es de ${this.credit}`);
    }

    creditCharge(amount, password) {
    
        this.validatePassword(password) ? (this.credit += amount) : console.log('Contraseña incorrecta');
        console.log(`Su saldo actual es de ${this.credit}`);
    }

    // Crear 2 usuarios y realizar transferencias entre ellos, analizar qué debería pasar con el crédito

    // transferCredit(destination, amount) {

    // }
}

class CreditAccount extends BankAccount {
    constructor(id, userName, password, initialCredit, numberAccount, email) {
        super(id, userName, password, initialCredit, numberAccount, email)
        this.creditLineLimit = 1000000;
        this.credit = initialCredit += this.creditLineLimit;
        this.creditCardLimit = 100000;
        this.usedCreditCarCredit = 0;
    }

    payCreditLine(amount) {
        this.credit += amount;
        this.creditLineLimit -= amount;
    }

    payCreditCard(amount) {
        this.usedCreditCarCredit -= amount;
    }

    useCreditCard(amount) {
        this.useCreditCard += amount;
        this.creditCardLimit -= amount;
        console.log(`${this.userName}, ha utilizado $${amount} de su tarjeta y queda disponible $${this.creditCardLimit}`);
        super.creditWithdraw(amount);
        console.log(this.credit);
    }
}

const userOne = new BankAccount('11111111-1', 'Carito Da Silva', 'holaMundo', 10000, 1, 'caro@gmail.com');
// console.log("🚀 ~ file: poo.js:33 ~ userOne", userOne)

// console.log(userOne.creditCharge(100000, 'holaMundo'));

const userTwo = new CreditAccount('22222222-2', 'Mitzuro Calzadilla', 'chaoNinjas', 25000, 2, 'mitz@gmail.com');

userTwo.useCreditCard(2000);

