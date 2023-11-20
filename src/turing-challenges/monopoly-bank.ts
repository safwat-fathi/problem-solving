type IPerson = {
  name: string;
  cash: number;
};

type IAccount = IPerson & {
  balance: number;
};

export class Persons {
  private _persons: string[] = [];

  public add_person(name: string) {
    // Check if the bank name already exists
    if (this._person_exists(name)) {
      throw new Error(`Person with name ${name} already exists.`);
    }

    this._persons.push(name);
  }

  private _person_exists(name: string) {
    return this._persons.findIndex(personName => name === personName) > -1;
  }
}

const persons = new Persons();

export class Person {
  name: string;
  cash: number;

  constructor(n: string, c: number) {
    persons.add_person(n);

    this.name = n;
    this.cash = c;

    console.log(`${n} has been created with ${c} dollars in cash.`);
  }
}

class Banks {
  private _banks: string[] = [];

  public add_bank(name: string) {
    // Check if the bank name already exists
    if (this._bank_exists(name)) {
      throw new Error(`Bank with name ${name} already exists.`);
    }

    this._banks.push(name);
  }

  private _bank_exists(name: string) {
    return this._banks.findIndex(bankName => name === bankName) > -1;
  }
}

const banks = new Banks();

export class Bank {
  name: string;
  private _total_cash: number = 0;
  private _accounts: IAccount[] = [];

  constructor(n: string) {
    banks.add_bank(n);

    this.name = n;

    console.log(`${n} has been created.`);
  }

  public open_account(person: IPerson) {
    // open account with 0 balance
    this._accounts.push({ ...person, balance: 0 });

    return `An account has been opened for ${person.name} with ${this.name}.`;
  }

  public deposit(p: IPerson, amount: number) {
    const personInfo = this._find_account(p);

    if (personInfo) {
      if (amount > personInfo.cash)
        return `${p.name} does not have enough cash to perform this deposit.`;

      // increase bank total cash
      this._update_cash(this, amount, "increase");

      const newBalance = personInfo.balance + amount;
      const newCash = personInfo.cash - amount;

      this._update_account({
        name: personInfo.name,
        balance: newBalance,
        cash: newCash,
      });

      return `${amount} dollars have been deposited into Jake's Chase account. Balance: ${newBalance} Cash: ${newCash}`;
    }
  }

  public withdrawal(p: IPerson, amount: number) {
    const personInfo = this._find_account(p);

    if (personInfo) {
      if (amount > personInfo.balance) return `Insufficient funds.`;

      const newBalance = personInfo.balance - amount;
      const newCash = personInfo.cash + amount;

      this._update_account({
        name: personInfo.name,
        balance: newBalance,
        cash: newCash,
      });

      return `${p.name} has withdrawn ${amount} dollars. Balance: ${newBalance}`;
    }
  }

  public transfer(p: IPerson, b: Bank, amount: number) {
    const personInfo = this._find_account(p);
    const hasBankAccount = b._accounts.find(acc => p.name === acc.name);

    if (!hasBankAccount)
      return `${p.name} does not have an account with ${b.name}.`;

    if (personInfo) {
      if (personInfo.balance < amount) return `Insufficient funds.`;

      // decrease transferred from bank total cash
      this._update_cash(this, amount, "decrease");
      // increase transferee bank total cash
      this._update_cash(b, amount, "increase");

      return `${p.name} has transferred ${amount} dollars from ${this.name} to ${b.name}.`;
    }
  }

  public total_cash() {
    return `Total Cash: ${this._total_cash} dollars`;
  }

  // util functions
  private _find_account(p: IPerson) {
    const account = this._accounts.find(acc => p.name === acc.name);

    return account ? account : null;
  }

  private _update_account(newAccount: IAccount) {
    this._accounts = this._accounts.map(account =>
      newAccount.name === account.name ? { ...newAccount } : account
    );
  }

  private _update_cash(
    b: Bank,
    amount: number,
    action: "increase" | "decrease"
  ) {
    if (action === "increase") b._total_cash += amount;
    if (action === "decrease") b._total_cash -= amount;
  }
}
