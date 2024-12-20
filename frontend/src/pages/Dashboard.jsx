import React from "react";
import { Progress, Flex, Tabs, Button, Row, Col, Typography } from "antd";
import { CheckCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { StatisticCard } from "@ant-design/pro-components";
import RcResizeObserver from "rc-resize-observer";
import { useSelector } from "react-redux";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const { Title, Text } = Typography;

const { Divider } = StatisticCard;

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const grossPay = 200000;
  const tax = 15000;
  const takeHome = grossPay - tax;

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
          padding: "20px",
          border: "2px solid black",
        }}
      >
        <div className="dash-first-inner-content">
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
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <Flex
              style={{
                alignItems: "center",
                gap: 10,
                padding: "5px 5px 30px 5px",
              }}
            >
              <FaRegMoneyBill1 style={{ fontSize: "2.4em" }} />
              <h2 style={{ fontSize: "1.4em", fontWeight: "600" }}>
                Your Payslips
              </h2>
            </Flex>

            {/* Tabs for Year Selection */}
            <Tabs defaultActiveKey="1" type="card" centered>
              <Tabs.TabPane tab="May 2024" key="1">
                <p></p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="April 2024" key="2">
                <p></p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="March 2024" key="3">
                <p></p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="February 2024" key="4">
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
                  <Title level={5} style={{ margin: 0 }}>
                    MAY
                  </Title>
                  <Text type="primary">2024</Text>
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
                          backgroundColor: "#47D9A0",
                          marginRight: "8px",
                        }}
                      />
                      <Text strong style={{ fontSize: "1em" }}>
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
                      <Text strong style={{ fontSize: "1em" }}>
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
                      <Text strong style={{ fontSize: "1em" }}>
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
