function BankAccount(name, balance = 0) {
    this.name = name;
    this.accountNo = Date.now();
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

const myAccount = new BankAccount("Pintu", 2000);
const rakeshAccount = new BankAccount("Rakesh", 2000);
rakeshAccount.deposit(5000);
rakeshAccount.withdraw(1000);
console.log(rakeshAccount);