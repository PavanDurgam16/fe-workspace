import React from "react";
import LocationDropdown from "../utils/LocationDropdown.jsx";
import  TableComponent from '../components/TableComponent.jsx'

const Dashboard = () => {
    const loggedInEmployeeId = "EMP002";

    return (
        <div style={{ background: "var(--background-color)" }}>
            <div>
                <h1>Welcome to Employee Portal</h1>
                <LocationDropdown loggedInEmployeeId={loggedInEmployeeId} />
            </div>
            <div>
                <TableComponent />
            </div>
        </div>
    );
};

export default Dashboard;
