import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatabale from "../../components/datatable/Datatabale";
import "./list.scss";
function List() {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatabale />
            </div>
        </div>
    );
}

export default List;
