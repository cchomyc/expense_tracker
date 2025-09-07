class Month {
  constructor(monthNum) {
    this.monthNum = monthNum;
    this.expenses = []; // Sorted by ascending dayOfMonth.
    this.total = 0;
  }

  getMonthStr() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.monthNum];
  }

  getMonthAbbrev() {
    return ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."][this.monthNum];
  }

  addExpense(expense) {
    if (this.expenses.length === 0) {
      // No existing Expenses - insertion is trivial.
      this.expenses.push(expense);
      this.total = expense.amount;
    } else {
      // Insert the new Expense right before the first existing Expense that has a later dayOfMonth.
      let i = 0;
      while (i < this.expenses.length && this.expenses[i].dayOfMonth <= expense.dayOfMonth) {
        i += 1;
      }
      if (i === this.expenses.length) {
        this.expenses.push(expense);
      } else {
        const laterExpenses = this.expenses.splice(i, this.expenses.length - i, expense);
        this.expenses = this.expenses.concat(laterExpenses);
      }
      this.total += expense.amount;
    }
  }

  deleteExpense(expenseId) {
    const i = this.expenses.findIndex(expense => expense.id === expenseId);
    if (i === -1) { // Not found.
      return;
    }
    this.total -= this.expenses[i].amount;
    if (i === 0) {
      this.expenses.shift();
    } else if (i === this.expenses.length - 1) {
      this.expenses.pop();
    } else {
      const laterExpenses = this.expenses.splice(i + 1);
      this.expenses.pop();
      this.expenses = this.expenses.concat(laterExpenses);
    }
  }
}

export default Month;