import { useState } from "react";

function MonthView({ monthNum, getMonth }) {
  let [ month, setMonth ] = useState(getMonth(monthNum));

  return (
    <div>
      <h2><span>{month.getMonthStr()} 2025</span><span className="MonthViewTotal">Total: {month.total.toFixed(2)}</span></h2>
      <table>
        <thead><tr><th>Date</th><th>Merchant</th><th>Amount</th><th>Options</th></tr></thead>
        <tbody>
          {month.expenses.map(expense => (
            // TODO: Add key={unique_id} in each generated <tr>.
            <tr><td>{month.getMonthAbbrev()} {expense.dayOfMonth}</td><td>{expense.merchant}</td><td>{expense.amount.toFixed(2)}</td><td>Edit/Delete</td></tr>
          ))}
          <tr><td><input /></td><td><input /></td><td><input /></td><td><button>Add</button></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default MonthView;