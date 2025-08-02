import { Link, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import MonthView from "./MonthView";
import "./App.css";

function App() {
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
          <Route path="/month" element={<MonthView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;