import React, { useState } from 'react';
import '../styles/home.css';
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import MainContent from "../components/MainContent.jsx";

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="home-container">
            <Header/>
            <div className="bottom-container">
                <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}/>
                <MainContent isCollapsed={isCollapsed} />
            </div>
        </div>
    );
};

export default Home;
