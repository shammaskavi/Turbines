import React from "react";
import Card from "../../Components/Card/Card";
import Topbar from "../../Components/Topbar/Topbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div
      className="dashboard"
      style={{
        marginTop: "10px",
      }}
    >
      <Topbar />
      <div
        className="cardContainer"
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card title="2/3 Turbines Active" link={true} />
        <Card subtext="Avg Energy generated" title="1083 KWh" data={true} />
        <Card subtext="Avg Voltage generated" title="108 V" data={true} />
        <Card subtext="Avg Current generated" title="90 Amps" data={true} />
      </div>
    </div>
  );
}

export default Dashboard;
