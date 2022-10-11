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
        <Menu.Item className="name-logo" key="home">
          Allwin Philip
        </Menu.Item>

        <Menu.Item key="mail" icon={<UserOutlined />}>
          <a href="#typing-animation-text">About </a>
        </Menu.Item>

        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          <a href="/#projects-page">Projects </a>
        </Menu.Item>

        <Menu.Item key="alipay" icon={<BranchesOutlined />}>
          <a href="#technologies-page"> Tech</a>
        </Menu.Item>

        <Menu.Item style={{ marginLeft: "auto" }} href="/contact-page">
          <a href="/#contact-page">Contact </a>
          <ArrowRightOutlined style={{ marginLeft: "10px" }} />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
