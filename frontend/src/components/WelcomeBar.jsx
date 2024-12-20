import React from "react";

const WelcomeBar = ({ currentUser }) => {
  return (
    <div
      style={{
        padding: "15px 20px",
      }}
    >
      <h2>Welcome {currentUser?.username || "Guest"}!</h2>
      <p>Developer at Microsoft</p>
    </div>
  );
};

export default WelcomeBar;
