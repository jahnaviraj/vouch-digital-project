import { PageHeader } from "antd";

function Header(props) {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="ATools."
        extra={props.extra}
      ></PageHeader>
    </div>
  );
}

export default Header;
