import { PageHeader } from "antd";

const Header = ({ extra }) => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader ghost={false} title="ATools." extra={extra} />
    </div>
  );
};

export default Header;
