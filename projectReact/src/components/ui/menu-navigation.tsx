import React from "react";
import {
  FileTextOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const MenuNav: MenuItem[] = [
  {
    key: "sub1",
    // label: "Home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "sub2",
    label: <Link to="/">Master Menu</Link>,
    icon: <FileTextOutlined />,
  },
  {
    key: "sub3",
    label: <Link to="/todo">Todo</Link>,
    icon: <FileTextOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

const MenuNavigation: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <nav>
      {/* 🔹 Tambahkan daftar menu biasa */}
      <ul className="flex gap-4 mb-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todo" className="hover:text-gray-300">
            Todo
          </Link>
        </li>
      </ul>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={MenuNav}
      />
    </nav>
  );
};

export default MenuNavigation;
