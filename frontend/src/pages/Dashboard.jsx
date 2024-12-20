import React from "react";
import { useSelector } from "react-redux";
import EmploymentDetails from "../components/EmploymentDetails";
import AttendanceBar from "../components/AttendanceBar";
import PayslipBar from "../components/PayslipBar";
import WelcomeBar from "../components/WelcomeBar";
import BankBar from "../components/BankBar";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div style={{ background: "#f0f2f5", minHeight: "100vh" }}>
      <div style={{ padding: "15px 20px", marginLeft: "3.5em" }}>
        <WelcomeBar currentUser={currentUser} />
      </div>
      <div
        className="dashboard-container"
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <EmploymentDetails />
        <AttendanceBar />
        <PayslipBar />
        <BankBar />
      </div>
    </div>
  );
};

export default Dashboard;
