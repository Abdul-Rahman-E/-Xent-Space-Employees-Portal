import React from "react";
import { Row, Col } from "antd";

const EmploymentDetails = () => {
  return (
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
            <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>Department</h3>
            <p style={{ fontWeight: "600" }}>Engineering</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div style={{ marginBottom: "10px" }}>
            <h3 style={{ fontSize: "0.9em", fontWeight: "500" }}>Location</h3>
            <p style={{ fontWeight: "600" }}>Dubai</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EmploymentDetails;
