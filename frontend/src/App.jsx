import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Sidebar />
              <Layout style={{ marginLeft: 0, display: "flex" }}>
                <Navbar />
                <Content
                  style={{
                    width: "100%",
                    padding: "20px",
                    height: "100%",
                    overflow: "auto",
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/employees" element={<Employees />} />
                  </Routes>
                </Content>
              </Layout>
            </ProtectedRoute>
          }
        ></Route> */}
      </Routes>
    </Layout>
  );
}

export default App;