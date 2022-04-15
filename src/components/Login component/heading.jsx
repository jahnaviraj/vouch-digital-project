import { Typography } from "antd";

const { Title } = Typography;

function Heading(props) {
  return <Title>{props.text}</Title>;
}

export default Heading;
