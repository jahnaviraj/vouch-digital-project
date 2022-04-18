import Heading from "./heading";
import Subtitle from "./subtitle";
import NormalForm from "./form";
import DisplayAlert from "./alert";
import { useState } from "react";
import axios from "axios";

const initialState = {
  statusAvailable: false,
  status: {
    isLogin: false,
    message: null,
  },
};

const LoginForm = () => {
  // set state for login status
  const [loginStatus, setIsLogin] = useState(initialState);
  // set state for loading once login clicked
  const [isLoading, setIsLoading] = useState(false);

  // define submit button function
  const onFinish = (values) => {
    // set loading true while api fetches response
    setIsLoading(true);
    const userData = {
      email: values.email,
      password: values.password,
    };
    // make api call for login
    axios
      .post("https://reqres.in/api/login", userData)
      .then(function (response) {
        setIsLoading(false);
        setIsLogin({
          statusAvailable: true,
          status: {
            isLogin: true,
            type: "success",
            message: "Login successful",
          },
        });
        setTimeout(() => {
          setIsLogin(initialState);
        }, 1500);
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsLogin({
          statusAvailable: true,
          status: {
            isLogin: false,
            type: "error",
            message: "Invalid credentials",
          },
        });
        setTimeout(() => {
          setIsLogin(initialState);
        }, 1500);
      });
  };

  return (
    <>
      <Heading text="Welcome Back" />
      <Subtitle text="Subtitle text goes here" />

      <NormalForm onFinish={onFinish} loading={isLoading} />
      <DisplayAlert
        loading={isLoading}
        showAlert={loginStatus.statusAvailable}
        type={loginStatus.status.type}
        message={loginStatus.status.message}
      />
    </>
  );
};

export default LoginForm;
