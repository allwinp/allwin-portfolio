import { useState } from "react";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  ArrowRightOutlined,
  UserOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

import "./Navbar.styles.css";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={{ current }}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item
          className="name-logo"
          style={{ fontSize: "18px", color: "#CAAAF3" }}
          key="home"
        >
          Allwin Philip
        </Menu.Item>
        <Menu.Item key="mail" icon={<UserOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="alipay" icon={<BranchesOutlined />}>
          Tech
        </Menu.Item>
        <Menu.Item style={{ marginLeft: "auto" }}>
          Contact
          <ArrowRightOutlined style={{ marginLeft: "10px" }} />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
