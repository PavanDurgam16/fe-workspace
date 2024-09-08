import React, {useEffect, useState, useRef} from "react";
import { roles } from "../data/roles"; // Import roles data
import { FaChevronLeft, FaChevronRight, FaFolder, FaLink } from 'react-icons/fa'; // Import icons
import "../styles/sidebar.css";
import {Link} from "react-router-dom";

const Sidebar = ({ toggleSidebar, isCollapsed }) => {
    const [activeRole, setActiveRole] = useState(null);

    const toggleRole = (roleName) => {
        setActiveRole(activeRole === roleName ? null : roleName);
    };

    const roleRefs = useRef([]);

    useEffect(() => {
        // Check each role name length and update class for scrolling
        roleRefs.current.forEach((roleRef) => {
            if (roleRef && roleRef.scrollWidth > 220) {
                roleRef.classList.add('scroll');
            } else {
                roleRef.classList.remove('scroll');
            }
        });
    }, [roles, activeRole]);

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {/* Collapse/Expand button inside the sidebar */}
            <button
                className="toggle-btn btn btn-secondary mb-3 w-100"
                onClick={toggleSidebar}
            >
                {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>

            {roles.map((role, index) => (
                <div key={index} className="role-section">
                    <div
                        className={`d-flex justify-content-between align-items-center p-2 role-header`}
                        onClick={() => toggleRole(role.name)}
                    >
                        <div className={`role-name-wrapper ${isCollapsed ? 'd-none' : ''}`}>
                            {/*<span className="role-icon"><FaFolder /></span>*/}
                            <span
                                className={`role-name`}
                                ref={ref => roleRefs.current[index] = ref}
                            >
                                {role.name}
                            </span>
                        </div>
                        {!isCollapsed && (
                            <span className={`arrow ${activeRole === role.name ? 'open' : ''}`}>
                                {activeRole === role.name ? "▲" : "▼"}
                            </span>
                        )}
                    </div>
                    {activeRole === role.name && !isCollapsed && (
                        <ul className="list-unstyled pl-3">
                            {role.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="role-link">
                                    {/*<FaLink className="link-icon" />*/}
                                    <Link to={link.path} className="text-white">▪ {link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
