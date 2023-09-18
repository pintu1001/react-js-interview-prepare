class BankAccount {
    customerName;
    accountNumber;
    balance = 0;
    constructor(name, amount) {
        this.customerName = name;
        this.accountNumber = Date.now();
        this.balance = amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}



// myAccount.deposit(10000);
// myAccount.withdraw(5000);


class CurrentAccount extends BankAccount {
    constructor(name, amount) {
        super(name, amount)
    }
}

const myAccount = new CurrentAccount("Pintu", 1000);
console.log(myAccount);