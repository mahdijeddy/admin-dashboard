import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./single.scss";
import { generateUsers, Users } from "../../generateUsers";

const user: Users = generateUsers()[0];
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={user?.avatar} alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">{user?.customer}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{user?.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+98 922 507 0000</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">tabriz - Shahnaz</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Iran</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User ( Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;
