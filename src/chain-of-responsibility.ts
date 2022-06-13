abstract class Account {

    protected successor!: Account;

    protected ballance!: number;

    private name!: string;

    public constructor(name: string, ballance: number) {
        this.name = name;
        this.ballance = ballance;
    }

    public setNext(successor: Account) {
        this.successor = successor;
    }

    public pay(amount: number): void {
        if (this.canPay(amount)) {

            console.log(`your ${this.name} account has ${this.ballance} \n`);

            this.ballance -= amount;

            console.log(`Paid ${amount} with : ${this.name} - your ${this.name} ballance is ${this.ballance} \n`);

        } else {

            console.log(`your ${this.name} account has ${this.ballance} \n`);

            console.log(`Cannot pay ${amount} with : ${this.name} \n`);

            if (this.successor) {
                this.successor.pay(amount);
            }
        }
    }

    public canPay(amount: number): boolean {
        return this.ballance >= amount;
    }

}

class Bank extends Account {
    public constructor(name: string, ballance: number) {
        super(name, ballance);
    }
}
class Paypal extends Account {
    public constructor(name: string, ballance: number) {
        super(name, ballance);
    }
}
class Bitcoin extends Account {
    public constructor(name: string, ballance: number) {
        super(name, ballance);
    }
}

const bank = new Bank('Bank', 100);
const paypal = new Paypal('Paypal', 200);
const bitcoin = new Bitcoin('Bitcoin', 300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(283);
/**
 * output : 
 * 
 * your Bank account has 100
 * Cannot pay 283 with : Bank
 * 
 * your Paypal account has 200
 * Cannot pay 283 with : Paypal
 * 
 * your Bitcoin account has 300
 * Paid 283 with : Bitcoin - your ballance is 17
*/



