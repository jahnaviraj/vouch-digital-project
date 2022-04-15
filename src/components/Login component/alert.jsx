import { Alert, Spin, Space } from "antd";
import { useEffect, useState } from "react";

const DisplayAlert = ({ type, message, showAlert, loading }) => {
  // state for displaying alert
  const [display, setDisplay] = useState(false);

  // display alert if showAlert is true for 1.5 seconds
  useEffect(() => {
    if (showAlert) {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 1500);
    }
  }, [showAlert]);

  // if display is true render alert
  // else if loading is true render loading
  // else render null
  const renderComponent = () => {
    if (display) return <Alert message={message} type={type} />;
    else if (loading)
      return (
        <Space size="middle">
          <Spin />
        </Space>
      );
    else return null;
  };

  return renderComponent();
};

export default DisplayAlert;
