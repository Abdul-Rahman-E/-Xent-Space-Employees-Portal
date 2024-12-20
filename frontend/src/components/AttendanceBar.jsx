import React from "react";
import { Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { StatisticCard } from "@ant-design/pro-components";

const AttendanceBar = () => {
  return (
    <Col md={8} className="dash-second-inner-content">
      <StatisticCard
        statistic={{
          title: "Attendance",
          value: 88,
          suffix: "%",
          icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
        }}
        chart={
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f6ffed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#389e0d",
            }}
          >
            Monthly Average
          </div>
        }
        footer={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Last Month: 90%</span>
            <span>Year-to-Date: 89%</span>
          </div>
        }
        style={{
          padding: "20px",
          backgroundColor: "#fff",
        }}
      />
    </Col>
  );
};

export default AttendanceBar;
