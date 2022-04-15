import React from "react";
import Header from "./components/header";
import LoginForm from "./components/Login component/login";
import Image from "./components/image";
import "./App.css";
import { Button } from "antd";

const App = () => (
  // render main app component
  <div className="App">
    {/* render header with buttons for trial and login  */}
    <Header
      extra={[
        <Button className="header-btn trial-btn">Start Free trial</Button>,
        <Button className="header-btn login-btn">Login</Button>,
      ]}
    />
    {/* main content  */}
    <div className="flex-container">
      <LoginForm className="flex-items" />
      <Image
        src="https://i.ibb.co/X26Hsq9/solid-color-image.jpg"
        className="flex-items"
      />
    </div>
  </div>
);

export default App;
