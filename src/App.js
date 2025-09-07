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
      monthCopy.addExpense(new Expense(expense));
    });
    return monthCopy;
  };

  // Creates a new Expense with the requested details and adds it to the Month corresponding to monthNum.
  const addExpenseToMonth = (monthNum, dayOfMonth, merchant, amount) => expenseYear[monthNum].addExpense(new Expense(dayOfMonth, merchant, amount));

  // Deletes the Expense with id expenseId from the Month corresponding to monthNum.
  const deleteExpenseFromMonth = (monthNum, expenseId) => expenseYear[monthNum].deleteExpense(expenseId);

  // End of data-handling functions.

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <nav>
        <Link to="/" className="NavItem">Overview</Link>
        <Link to="/month" className="NavItem">This Month</Link>
      </nav>
      <div className="View">
        <Routes>
          <Route path="/" element={<Overview getTotals={getTotals} />} />
          <Route path="/month" element={<MonthView getMonth={getMonth} addExpenseToMonth={addExpenseToMonth} deleteExpenseFromMonth={deleteExpenseFromMonth} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;