import Heading from "./heading";
import Subtitle from "./subtitle";
import NormalForm from "./form";
const axios = require("axios").default;

function LoginForm() {
  function onFinish(values) {
    const userData = {
      email: values.email,
      password: values.password,
    };
    console.log(userData);

    axios.post("https://reqres.in/api/login", userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });
  }

  return (
    <div className="form-content">
      <Heading text="Welcome Back" />
      <Subtitle text="Subtitle text goes here" />
      <NormalForm onFinish={onFinish} />
    </div>
  );
}

export default LoginForm;
