import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [userName, setUsername] = useState("");
  const [passWord, setUserPassword] = useState("");
  const [showPassword, setShowPassWord] = useState(true);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter the userName"
        value={userName}
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter the password"
        value={passWord}
        onChange={e => {
          setUserPassword(e.target.value);
        }}
      />

      <h2>{userName}</h2>
      {/* if the show password is true, dpsplay password else not */}
      <h2>{showPassword ? passWord : "*".repeat(passWord.length)}</h2>

      <button
        onClick={e => {
          setShowPassWord(!showPassword);
        }}
      >
        {!showPassword ? "Show Password" : "Hide Password"}
      </button>
    </div>
  );
};

export default App;
