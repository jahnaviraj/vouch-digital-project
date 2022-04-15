import React from "react";
import Header from "./components/header";
import LoginForm from "./components/Login component/login";
import Image from "./components/image";
import "./App.css";
import { Button } from "antd";

const App = () => (
  <div className="App">
    <Header
      extra={[
        <Button className="header-btn trial-btn">Start Free trial</Button>,
        <Button className="header-btn login-btn">Login</Button>,
      ]}
    />
    <div className="flex-container">
      <LoginForm className="flex-items" />
      <Image className="flex-items" />
    </div>
  </div>
);

export default App;
