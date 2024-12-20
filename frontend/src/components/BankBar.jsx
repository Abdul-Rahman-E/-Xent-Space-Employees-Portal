import React from "react";
import { Button, Col, Divider } from "antd";
import { MdPayments } from "react-icons/md";
import { ArrowRightOutlined } from "@ant-design/icons";
import { RiBankLine } from "react-icons/ri";

const BankBar = ({ currentUser }) => {
  return (
    <Col
      style={{
        minWidth: "300px",
        width: "45%",
        margin: "auto",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <MdPayments style={{ fontSize: "2.4em", color: "#007bff" }} />
        <h2 style={{ fontSize: "1.4em", fontWeight: "600", margin: 0 }}>
          Payment Information
        </h2>
      </div>
      <Divider style={{ borderColor: "#e0e0e0" }} />

      {/* Payment Mode */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "10px 0",
        }}
      >
        <RiBankLine style={{ fontSize: "1.7em", color: "#007bff" }} />
        <div>
          <h3 style={{ fontSize: "0.85em", fontWeight: "500", margin: 0 }}>
            Payment Mode
          </h3>
          <h3 style={{ fontSize: "1em", fontWeight: "600", margin: 0 }}>
            Bank Transfer
          </h3>
        </div>
      </div>
      <Divider style={{ borderColor: "#e0e0e0", marginBottom: "20px" }} />

      {/* Payment Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {[
          { label: "Account Number", value: "1589500016800" },
          {
            label: "Account Holder Name",
            value: currentUser?.username || "N/A",
          },
          { label: "Bank Name", value: "Dubai Bank" },
          { label: "Routing Number", value: "123485464" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.9em",
                color: "#555",
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                margin: 0,
                fontWeight: "600",
                fontSize: "0.9em",
                color: "#000",
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Styled Button */}
      <Button
        type="primary"
        block
        icon={<ArrowRightOutlined />}
        style={{
          marginTop: "100px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderColor: "#007bff",
          fontWeight: "600",
        }}
      >
        View Details
      </Button>
    </Col>
  );
};

export default BankBar;
