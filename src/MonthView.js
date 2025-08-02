function MonthView() {
  return (
    <div>
      <h2><span>July 2025</span><span className="MonthViewTotal">Total: 127.64</span></h2>
      <table>
        <tr><th>Date</th><th>Merchant</th><th>Amount</th><th>Options</th></tr>
        <tr><td>Jul. 15</td><td>ABC Supermarket</td><td>127.64</td><td>Edit/Delete</td></tr>
        <tr><td><input /></td><td><input /></td><td><input /></td><td><button>Add</button></td></tr>
      </table>
    </div>
  );
}

export default MonthView;