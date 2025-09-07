import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MonthView({ getMonth, addExpenseToMonth, deleteExpenseFromMonth }) {
  const dayOfMonthInput = useRef(null);
  const merchantInput = useRef(null);
  const amountInput = useRef(null);

  // Fetch Month requested in URL query or default to current Month (according to system time).
  const queryParams = new URLSearchParams(useLocation().search);
  let monthNum = queryParams.get("month_num");
  if (monthNum === null || monthNum === "") {
    monthNum = (new Date()).getMonth();
  } else {
    monthNum = Number(monthNum);
  }
  let [ month, setMonth ] = useState(getMonth(monthNum));

  // Ensure that this component updates when a different Month is requested.
  useEffect(() => setMonth(getMonth(monthNum)), [monthNum]);

  // Button click-handlers.
  const addExpenseClicked = () => {
    addExpenseToMonth(monthNum, Number(dayOfMonthInput.current.value), merchantInput.current.value, Number(amountInput.current.value));
    dayOfMonthInput.current.value = null;
    merchantInput.current.value = null;
    amountInput.current.value = null;
    setMonth(getMonth(monthNum));
  };
  const deleteExpenseClicked = expenseId => {
    deleteExpenseFromMonth(monthNum, expenseId);
    setMonth(getMonth(monthNum));
  };

  return (
    <div>
      <h2><span>{month.getMonthStr()} 2025</span><span className="PositionRight">Total: {month.total.toFixed(2)}</span></h2>
      <table>
        <thead><tr><th>Date</th><th>Merchant</th><th className="AlignRight">Amount</th><th className="AlignRight">Options</th></tr></thead>
        <tbody>
          {month.expenses.map(expense => (
            <tr key={expense.id}>
              <td>{month.getMonthAbbrev()} {expense.dayOfMonth}</td>
              <td>{expense.merchant}</td>
              <td className="AlignRight">{expense.amount.toFixed(2)}</td>
              <td className="AlignRight">
                <button onClick={() => alert("Coming soon!")}>Edit</button>
                <button className="DangerousButton" onClick={() => deleteExpenseClicked(expense.id)}>Delete</button>
              </td>
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