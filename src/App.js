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

  // Insert dummy data.
  expenseYear[6].addExpense(new Expense(15, "ABC Supermarket", 127.64));
  expenseYear[6].addExpense(new Expense(13, "DEF Supermarket", 106.01));

  // Data-handling functions.
  const getMonth = monthNum => {
    // Return a copy of the requested Month.
    const monthOrig = expenseYear[monthNum];
    let monthCopy = new Month(monthNum);
    monthOrig.expenses.forEach(expense => {
      monthCopy.addExpense(new Expense(expense.dayOfMonth, expense.merchant, expense.amount));
    });
    return monthCopy;
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <nav>
        <Link to="/">Overview</Link>
        <Link to="/month">This Month</Link>
      </nav>
      <div className="View">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/month" element={<MonthView monthNum={6} getMonth={getMonth} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;