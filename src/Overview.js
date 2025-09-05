import { Link } from "react-router-dom";

function Overview({ getTotals }) {
  const totals = getTotals();

  return (
    <div>
      <h2><span>Overview</span><span className="PositionRight">Grand Total: {totals.reduce((sum, [, monthTotal]) => sum + monthTotal, 0).toFixed(2)}</span></h2>
      <table>
        <thead><tr><th>Month</th><th className="AlignRight">Total</th></tr></thead>
        <tbody>
          {totals.map(([monthStr, monthTotal], index) => (
            <tr key={index}>
              <td><Link to={{pathname:"/month", search:"?month_num="+index}}>{monthStr} 2025</Link></td>
              <td className="AlignRight">{monthTotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;