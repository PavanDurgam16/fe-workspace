import React, { useState, useEffect } from 'react';

// Sample employees data
const employees = [
    { id: 'EMP001', name: "Amit Sharma", onsite: "LOC101" },
    { id: 'EMP002', name: "Neha Verma", onsite: "LOC102" },
    { id: 'EMP003', name: "Rajesh Singh", onsite: "LOC103" },
    { id: 'EMP004', name: "Pooja Iyer", onsite: "LOC104" },
    { id: 'EMP005', name: "Karthik Menon", onsite: "LOC105" },
    { id: 'EMP006', name: "Anjali Gupta", onsite: "LOC106" },
    { id: 'EMP007', name: "Sandeep Deshmukh", onsite: "LOC107" },
    { id: 'EMP008', name: "Rohit Kumar", onsite: "LOC108" },
    { id: 'EMP009', name: "Priya Sinha", onsite: "LOC109" },
    { id: 'EMP010', name: "Vikram Chauhan", onsite: "LOC110" }
];

// Sample locations data
const locations = [
    { locationCode: "LOC101", location: "Bengaluru" },
    { locationCode: "LOC102", location: "Mumbai" },
    { locationCode: "LOC103", location: "Delhi" },
    { locationCode: "LOC104", location: "Chennai" },
    { locationCode: "LOC105", location: "Hyderabad" },
    { locationCode: "LOC106", location: "Kolkata" },
    { locationCode: "LOC107", location: "Pune" },
    { locationCode: "LOC108", location: "Ahmedabad" },
    { locationCode: "LOC109", location: "Jaipur" },
    { locationCode: "LOC110", location: "Lucknow" },
    { locationCode: "LOC111", location: "Indore" },
    { locationCode: "LOC112", location: "Chandigarh" },
    { locationCode: "LOC113", location: "Coimbatore" },
    { locationCode: "LOC114", location: "Gurgaon" },
    { locationCode: "LOC115", location: "Noida" },
    { locationCode: "LOC104", location: "Chennai" },
{ locationCode: "LOC105", location: "Hyderabad" },
{ locationCode: "LOC106", location: "Kolkata" },
{ locationCode: "LOC107", location: "Pune" },
{ locationCode: "LOC108", location: "Ahmedabad" },
{ locationCode: "LOC109", location: "Jaipur" },
{ locationCode: "LOC110", location: "Lucknow" },
{ locationCode: "LOC111", location: "Indore" },
{ locationCode: "LOC112", location: "Chandigarh" },
{ locationCode: "LOC113", location: "Coimbatore" },
{ locationCode: "LOC114", location: "Gurgaon" },
{ locationCode: "LOC115", location: "Noida" }
];

const LocationDropdown = ({ loggedInEmployeeId }) => {
    const [employee, setEmployee] = useState(null);
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");

    useEffect(() => {
        const loggedInEmployee = employees.find(emp => emp.id === loggedInEmployeeId);
        setEmployee(loggedInEmployee);

        if (loggedInEmployee) {
            let employeeLocation = null;
            const otherLocations = [];

            for (let loc of locations) {
                if (loc.locationCode === loggedInEmployee.onsite) {
                    employeeLocation = loc;
                } else {
                    otherLocations.push(loc);
                }
            }

            const dropdownOptions = [employeeLocation, ...otherLocations];

            setFilteredLocations(dropdownOptions);
            setSelectedLocation(employeeLocation.location);
        }
    }, [loggedInEmployeeId]);

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    if (!employee) return <p>Loading...</p>;

    return (
        <div style={styles.container}>
            <div style={styles.employeeInfo}>{employee.name}'s Location</div>
            <div style={styles.selectContainer}>
                <select
                    id="location-dropdown"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    style={styles.select}
                >
                    {filteredLocations.map((loc, index) => (
                        <option key={index} value={loc.location}>
                            {loc.location}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default LocationDropdown;

// Inline styles
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: 'var(--background-color)',
        borderRadius: '8px',
    },
    employeeInfo: {
        marginRight: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    selectContainer: {
        position: 'relative',
        width: '200px',
        marginRight: '20px',
    },
    select: {
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
        maxHeight: '20vh',
    },
};