import React from "react";
import { Progress, Tabs, Button, Row, Col, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const { Title, Text } = Typography;

const PayslipBar = () => {
  const grossPay = 200000;
  const tax = 15000;
  const takeHome = grossPay - tax;

  const taxPercentage = (tax / grossPay) * 100;
  const takeHomePercentage = (takeHome / grossPay) * 100;

  return (
    <Col
      sm={100}
      md={14}
      lg={10}
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
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <FaRegMoneyBill1 style={{ fontSize: "2.4em", color: "#007bff" }} />
        <h2 style={{ fontSize: "1.4em", fontWeight: "600", margin: 0 }}>
          Your Payslips
        </h2>
      </div>

      {/* Tabs for Month Selection */}
      <Tabs size="small" defaultActiveKey="1" type="card" centered>
        <Tabs.TabPane tab="November 2024" key="1"></Tabs.TabPane>
        <Tabs.TabPane tab="October 2024" key="2"></Tabs.TabPane>
        <Tabs.TabPane tab="September 2024" key="3"></Tabs.TabPane>
        <Tabs.TabPane tab="August 2024" key="4"></Tabs.TabPane>
      </Tabs>

      {/* Circular Chart */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <Progress
            type="circle"
            percent={100}
            size={180}
            strokeColor="#d9d9d9"
            strokeWidth={10}
            showInfo={false}
          />
          <Progress
            type="circle"
            percent={100}
            strokeLinecap="butt"
            size={190}
            strokeColor="#d9d9d9"
            strokeWidth={1}
            trailColor="transparent"
            showInfo={false}
            style={{ position: "absolute", top: -5, left: -5 }}
          />
          <Progress
            type="circle"
            percent={taxPercentage + takeHomePercentage}
            strokeLinecap="butt"
            size={180}
            strokeColor="#47D9A0"
            strokeWidth={10}
            trailColor="transparent"
            showInfo={false}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <Progress
            type="circle"
            percent={taxPercentage}
            strokeLinecap="butt"
            size={180}
            strokeColor="#FF697A"
            strokeWidth={10}
            trailColor="transparent"
            showInfo={false}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Title level={5} style={{ margin: 0, color: "#000" }}>
              November
            </Title>
            <Text type="secondary" style={{ fontSize: "0.9em" }}>
              2024
            </Text>
          </div>
        </div>

        {/* Legend Indicators */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "20px",
                    backgroundColor: "#47D9A0",
                    marginRight: "8px",
                  }}
                />
                <Text strong style={{ fontSize: "1em", color: "#000" }}>
                  Take Home: ₹{takeHome.toLocaleString()}
                </Text>
              </div>
            </Col>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "20px",
                    backgroundColor: "#FF697A",
                    marginRight: "8px",
                  }}
                />
                <Text strong style={{ fontSize: "1em", color: "#000" }}>
                  Deductions: ₹{tax.toLocaleString()}
                </Text>
              </div>
            </Col>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "20px",
                    backgroundColor: "#d9d9d9",
                    marginRight: "8px",
                  }}
                />
                <Text strong style={{ fontSize: "1em", color: "#000" }}>
                  Gross Pay: ₹{grossPay.toLocaleString()}
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* View Payslip Button */}
      <Button
        type="primary"
        block
        icon={<ArrowRightOutlined />}
        style={{
          marginTop: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderColor: "#007bff",
          fontWeight: "600",
        }}
      >
        View Payslip
      </Button>
    </Col>
  );
};

export default PayslipBar;
