class Expense {
  static #nextId = 0; // Id to assign to next new Expense.

  constructor() {
    if (arguments.length === 3) { // Regular constructor: Expense(dayOfMonth, merchant, amount)
      this.id = Expense.#nextId;
      Expense.#nextId += 1;

      this.dayOfMonth = arguments[0];
      this.merchant = arguments[1];
      this.amount = arguments[2];
    } else if (arguments.length === 1 && arguments[0] instanceof Expense) { // Copy constructor: Expense(expense)
      this.id = arguments[0].id;
      this.dayOfMonth = arguments[0].dayOfMonth;
      this.merchant = arguments[0].merchant;
      this.amount = arguments[0].amount;
    } else {
      throw new Error("Invalid arguments; regular constructor is Expense(dayOfMonth, merchant, amount) or copy constructor is Expense(expense) .");
    }
  }
}

export default Expense;