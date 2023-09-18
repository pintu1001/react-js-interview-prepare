function BankAccount(name, balance = 0) {
    this.name = name;
    this.accountNo = Date.now();
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

function CurrentAccount(name, balance = 0) {
    BankAccount.call(this, name, balance);
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log("taking business loan " + amount);
}

const rakeshAccount = new CurrentAccount("Rakesh", 10000);
rakeshAccount.deposit(30000);
console.log(rakeshAccount);