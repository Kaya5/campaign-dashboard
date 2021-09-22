import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="firstLine">
      <h1 className="dash">Dashboard</h1>
      <div className="foodleDash">
        <div className="foodleHome">
          FOODLE / <span className="dashboard">Dashboard</span>
        </div>
      </div>
    </div>
  );
} 

export default Dashboard;
