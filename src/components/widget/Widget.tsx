import React from "react";
import {
    PersonOutlined,
    ShoppingCartOutlined,
    MonetizationOnOutlined,
    AccountBalanceWalletOutlined,
    KeyboardArrowUp,
} from "@mui/icons-material";
import "./widget.scss";

interface propsType {
    type: "user" | "order" | "earning" | "balance";
}
interface dataType {
    title: string;
    isMoney: boolean;
    link: string;
    count: number;
    icon: JSX.Element;
}

const Widget: React.FC<propsType> = ({ type }) => {
    let data: dataType = {
        title: "",
        isMoney: false,
        link: "",
        count: 0,
        icon: <div></div>,
    };

    const diff = 25;
    switch (type) {
        case "user":
            data = {
                count: 120,
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlined
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                count: 180,
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                count: 420,
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlined
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                count: 550,
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"}
                    {data.count}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
