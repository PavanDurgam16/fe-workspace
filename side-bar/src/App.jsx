import React, {useState} from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import About from "./pages/navigation/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import SkillMatrix from "./pages/navigation/SkillMatrix.jsx";
import UpdateDates from "./pages/navigation/UpdateDates.jsx";
import NDADashboard from "./pages/navigation/NDADashboard.jsx";
import TimesheetStatus from "./pages/navigation/TimesheetStatus.jsx";
import AssociateDetails from "./pages/navigation/AssociateDetails.jsx";
import './App.css';


function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className="app-container">
                <header className="app-header"> <Header /></header>
                <div className="app-body">
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <main className={`main-content ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/skill-matrix" element={<SkillMatrix/>}/>
                            <Route path="/update-dates" element={<UpdateDates/>}/>
                            <Route path="/timesheet-status" element={<TimesheetStatus/>}/>
                            <Route path="/nda-dashboard" element={<NDADashboard/>}/>
                            <Route path="/associate-details" element={<AssociateDetails/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="*" element={<h1>404 - Page Not Found</h1>}/>

                            {/* PM routes */}
                            {/*<Route path="/resource-summary" element={<ResourceSummary />} />
                              <Route path="/dashboard-transfer" element={<DashboardTransfer />} />
                              <Route path="/approve-skill-matrix" element={<ApproveSkillMatrix />} />
                              <Route path="/update-resources" element={<UpdateResources />} />*/}

                            {/* HOD routes */}
                            {/*<Route path="/ppr-reports" element={<PPRReports />} />
                              <Route path="/associate-info" element={<AssociateInfo />} />
                              <Route path="/associate-loading" element={<AssociateLoading />} />
                              <Route path="/team-details" element={<TeamDetails />} />*/}

                            {/* Admin routes */}
                            {/*<Route path="/user-management" element={<UserManagement />} />
                              <Route path="/system-settings" element={<SystemSettings />} />
                              <Route path="/audit-logs" element={<AuditLogs />} />
                              <Route path="/role-assignments" element={<RoleAssignments />} />*/}

                            {/* Add routes for HR, Finance, IT, Marketing & Sales, Legal, Product, and Operations */}
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App
