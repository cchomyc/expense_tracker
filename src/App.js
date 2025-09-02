import { Link, Routes, Route } from "react-router-dom";
import Expense from "./Expense";
import Month from "./Month";
import Overview from "./Overview";
import MonthView from "./MonthView";
import "./App.css";

function App() {
  // Initialize a year with no expenses.
  let expenseYear = [];
  for (let i = 0; i < 12; i++) {
    expenseYear.push(new Month(i));
  }

  // Data-handling functions:

  // Returns an array containing a [monthStr, total] pair for each Month.
  const getTotals = () => expenseYear.map(month => [month.getMonthStr(), month.total]);

  // Returns a copy of the Month corresponding to monthNum.
  const getMonth = monthNum => {
    const monthOrig = expenseYear[monthNum];
    let monthCopy = new Month(monthNum);
    monthOrig.expenses.forEach(expense => {
      monthCopy.addExpense(new Expense(expense.dayOfMonth, expense.merchant, expense.amount));
    });
    return monthCopy;
  };

  // Creates a new Expense with the requested details and adds it to the Month corresponding to monthNum.
  const addExpenseToMonth = (monthNum, dayOfMonth, merchant, amount) => expenseYear[monthNum].addExpense(new Expense(dayOfMonth, merchant, amount));

  // End of data-handling functions.

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <nav>
        <Link to="/">Overview</Link>
        <Link to="/month">This Month</Link>
      </nav>
      <div className="View">
        <Routes>
          <Route path="/" element={<Overview getTotals={getTotals} />} />
          <Route path="/month" element={<MonthView monthNum={(new Date()).getMonth()} getMonth={getMonth} addExpenseToMonth={addExpenseToMonth} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;