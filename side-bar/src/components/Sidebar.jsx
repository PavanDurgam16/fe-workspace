import React, {  useState } from "react";
import { roles } from "../data/roles"; // Import roles data
import {FaLink, FaBars, FaTimes} from 'react-icons/fa'; // Import icons
import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [activeRole, setActiveRole] = useState(null);

    const toggleRole = (roleName) => {
        setActiveRole(activeRole === roleName ? null : roleName);
    };

    return (
        <aside className="main-container">
            <div className="sidebar-container">
                <div style={{width: isOpen ? "300px" : "50px"}} className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
                    <div className="top-section">
                        <div className="bars">
                        <span className="bars-title">{
                            isOpen ? <FaTimes onClick={toggleSidebar}/> : <FaBars onClick={toggleSidebar}/>
                        }</span>
                        </div>
                    </div>
                    <section className="routes">
                        {roles.map((role, index) => (
                            <div key={index} className="role-section">
                                <div
                                    className="role-header"
                                    onClick={() => toggleRole(role.name)}
                                    role="button"
                                >
                                    {isOpen && (
                                        <>
                                            <div className="role-name-wrapper">
                                            <span
                                                className="role-name"
                                            >
                                                {role.name}
                                            </span>
                                            </div>
                                            <span className={`arrow ${activeRole === role.name ? 'open' : ''}`}>
                                            {activeRole === role.name ? "▲" : "▼"}
                                        </span>
                                        </>
                                    )}
                                </div>
                                {activeRole === role.name && isOpen && (
                                    <ul className="list-unstyled pl-3">
                                        {role.links.map((link, linkIndex) => (
                                            <li key={linkIndex} className="role-link">
                                                <NavLink to={link.path}
                                                         className={({isActive}) => isActive ? "active" : ""}
                                                         style={{textDecoration: 'none' }}
                                                         onClick={() => toggleSidebar(false)}
                                                >
                                                    <FaLink className="link-icon"/> &nbsp;
                                                    {isOpen && link.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
