import React from "react";
import { Progress, Tabs, Button, Row, Col, Typography } from "antd";
import { CheckCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { StatisticCard } from "@ant-design/pro-components";
import RcResizeObserver from "rc-resize-observer";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const { Divider } = StatisticCard;

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const grossPay = 100000; // Gross Pay
  const tax = 20000; // Tax
  const takeHome = grossPay - tax; // Take Home Pay

  // Percentages
  const taxPercentage = (tax / grossPay) * 100;
  const takeHomePercentage = (takeHome / grossPay) * 100;
  return (
    <div
      style={{
        background: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <div>
        <div
          style={{
            padding: "15px 20px",
            marginLeft: "3.5em",
          }}
        >
          <h2>Welcome {currentUser?.username || "Guest"}!</h2>
          <p>Developer at Microsoft</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "5px",
          border: "2px solid black",
        }}
      >
        <div className="dash-first-content">
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>
                  Employment Type
                </h3>
                <p style={{ fontWeight: "600" }}>Permanent</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>
                  Date of Joining
                </h3>
                <p style={{ fontWeight: "600" }}>01 Jan 2024</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>
                  Contract Type
                </h3>
                <p style={{ fontWeight: "600" }}>Unlimited Contract</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>
                  Department
                </h3>
                <p style={{ fontWeight: "600" }}>Engineering</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>
                  Location
                </h3>
                <p style={{ fontWeight: "600" }}>Hyderbad</p>
              </div>
            </Col>
          </Row>
        </div>
        <Col xs={10} md={8} style={{}}>
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
      </div>
      <div style={{ border: "2px solid red" }}>
        <div
          style={{ background: "#f0f2f5", minHeight: "100vh", padding: "20px" }}
        >
          <div
            style={{
              maxWidth: "600px",
              margin: "auto",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            {/* Tabs for Year Selection */}
            <Tabs defaultActiveKey="1" type="card" centered>
              <Tabs.TabPane tab="May 2020" key="1">
                <p></p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="April 2020" key="2">
                <p></p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="March 2020" key="3">
                <p></p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="February 2020" key="4">
                <p></p>
              </Tabs.TabPane>
            </Tabs>

            {/* Circular Chart and Indicators */}
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
                  showInfo={false}
                />
                <Progress
                  type="circle"
                  percent={taxPercentage + takeHomePercentage}
                  size={180}
                  strokeColor="#52c41a"
                  trailColor="transparent"
                  showInfo={false}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Progress
                  type="circle"
                  percent={taxPercentage}
                  size={180}
                  strokeColor="#f5222d"
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
                  <Title level={5} style={{ margin: 0 }}>
                    MAY
                  </Title>
                  <Text type="secondary">2020</Text>
                </div>
              </div>

              {/* Vertical Indicators */}
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
                          backgroundColor: "#52c41a",
                          marginRight: "8px",
                        }}
                      />
                      <Text strong style={{ fontSize: "16px" }}>
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
                          backgroundColor: "#f5222d",
                          marginRight: "8px",
                        }}
                      />
                      <Text strong style={{ fontSize: "16px" }}>
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
                      <Text strong style={{ fontSize: "16px" }}>
                        Gross Pay: ₹{grossPay.toLocaleString()}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Styled Button */}
            <Button
              type="primary"
              block
              icon={<ArrowRightOutlined />}
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
              }}
            >
              View Payslip
            </Button>
          </div>
        </div>
        <div style={{ border: "2px solid green" }}></div>
      </div>
    </div>
  );
};

export default Dashboard;
