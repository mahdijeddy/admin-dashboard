import React from "react";
import { Link } from "react-router-dom";
import {
    LineStyle,
    PersonOutline,
    PsychologyOutlined,
    AccountCircleOutlined,
    ExitToApp,
    SettingsApplications,
    SettingsSystemDaydreamOutlined,
    CreditCard,
    LocalShipping,
    NotificationsNone,
    InsertChart,
    Inventory,
} from "@mui/icons-material";
import "./sidebar.scss";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Dashboard</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <LineStyle className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutline className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
