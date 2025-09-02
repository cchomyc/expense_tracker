import { useRef, useState } from "react";

function MonthView({ monthNum, getMonth, addExpenseToMonth }) {
  const dayOfMonthInput = useRef(null);
  const merchantInput = useRef(null);
  const amountInput = useRef(null);
  let [ month, setMonth ] = useState(getMonth(monthNum));

  // Button click-handlers.
  const addExpenseClicked = () => {
    addExpenseToMonth(monthNum, Number(dayOfMonthInput.current.value), merchantInput.current.value, Number(amountInput.current.value));
    dayOfMonthInput.current.value = null;
    merchantInput.current.value = null;
    amountInput.current.value = null;
    setMonth(getMonth(monthNum));
  };

  return (
    <div>
      <h2><span>{month.getMonthStr()} 2025</span><span className="PositionRight">Total: {month.total.toFixed(2)}</span></h2>
      <table>
        <thead><tr><th>Date</th><th>Merchant</th><th className="AlignRight">Amount</th><th className="AlignRight">Options</th></tr></thead>
        <tbody>
          {month.expenses.map(expense => (
            // TODO: Add key={unique_id} in each generated <tr>.
            <tr>
              <td>{month.getMonthAbbrev()} {expense.dayOfMonth}</td>
              <td>{expense.merchant}</td>
              <td className="AlignRight">{expense.amount.toFixed(2)}</td>
              <td className="AlignRight">Edit/Delete</td>
            </tr>
          ))}
          <tr>
            <td><input ref={dayOfMonthInput} type="number" placeholder="Day of month" /></td>
            <td><input ref={merchantInput} type="text" placeholder="Merchant name" /></td>
            <td className="AlignRight"><input ref={amountInput} type="number" placeholder="Amount" className="AlignRight" /></td>
            <td className="AlignRight"><button onClick={addExpenseClicked}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MonthView;