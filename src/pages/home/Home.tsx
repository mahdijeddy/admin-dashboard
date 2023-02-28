import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="Widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="balance" />
                    <Widget type="earning" />
                </div>
                <div className="charts">charts</div>
                <div className="listContainer">
                    <div className="listTitle">Latest</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
