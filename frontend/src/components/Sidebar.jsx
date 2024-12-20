import React, { useEffect } from "react";
import { Layout, Menu, Typography, Button, Flex } from "antd";
import {
  MenuUnfoldOutlined,
  CloseOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../store/menuSlice.js";
import { toggleCollapsed } from "../store/sidebarSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const { Sider } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <RxDashboard />,
    path: "/",
  },
  {
    key: "profile",
    label: "My Profile",
    path: "/profile",
    icon: <FaUserCircle />,
  },
  {
    key: "salary",
    label: "Salary Details",
    path: "/salary",
    icon: <IoDocumentText />,
  },
  {
    key: "payslips",
    label: "Payslips",
    path: "/payslip",
    icon: <FaRegMoneyBill1 />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const collapsed = useSelector((state) => state.sidebar.collapsed);
  const selectedKey = useSelector((state) => state.menu.selectedKey);

  useEffect(() => {
    const currentPath = location.pathname;

    const selectedMenu = menuItems.find((item) => {
      if (item.children) {
        return item.children.some((child) =>
          currentPath.startsWith(child.path)
        );
      }
      return currentPath === item.path;
    });

    if (selectedMenu) {
      dispatch(selectItem(selectedMenu.key));
    }
  }, [location.pathname, dispatch]);

  const handleMenuClick = (e) => {
    const clickedItem = menuItems.find((item) => item.key === e.key);

    if (clickedItem?.path) {
      navigate(clickedItem.path);
    }

    dispatch(selectItem(e.key));
  };

  const handleToggle = () => {
    dispatch(toggleCollapsed());
  };

  return (
    <>
      <Sider
        className="xent-space sider-mobile"
        collapsible
        collapsed={collapsed}
        breakpoint="sm"
        collapsedWidth="0"
        onBreakpoint={() => handleToggle()}
        trigger={null}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#001529",
          zIndex: 1000,
        }}
      >
        <Button
          className="sidebar-toggle"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleToggle}
          style={{
            position: "fixed",
            top: "20px",
            left: collapsed ? "10px" : "215px",
            zIndex: 1001,
            color: "white",
            fontSize: "18px",
            background: "#001529",
            border: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
          }}
        >
          <Title
            level={4}
            style={{
              color: "white",
              margin: 0,
              fontSize: "24px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {collapsed ? "X" : "Xent Space"}
          </Title>
        </div>

        <Menu
          theme="dark"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          mode="inline"
          items={menuItems.map((item) => ({
            key: item.key,
            label: item.label,
            icon: item.icon,
            children: item.children
              ? item.children.map((subItem) => ({
                  key: subItem.key,
                  label: subItem.label,
                  onClick: (e) => {
                    handleMenuClick(e);
                    navigate(subItem.path);
                  },
                }))
              : undefined,
          }))}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
