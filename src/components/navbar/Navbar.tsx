import React from "react";
import "./navbar.scss";
import {
    ListOutlined,
    SearchOutlined,
    DarkModeOutlined,
    NotificationsNoneOutlined,
    ChatBubbleOutlineOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
function Navbar() {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="wrapperLeft">
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <SearchOutlined />
                    </div>
                </div>

                <div className="items">
                    <div className="item">
                        <DarkModeOutlined
                            className="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
                        />
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
