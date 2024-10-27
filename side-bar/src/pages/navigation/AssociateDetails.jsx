import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isWithinInterval, parse } from 'date-fns';
import '../../styles/associate-details.css';
import { dummyData } from '../../data/associate-details.js';
import CustomAlert from '../../utils/CustomAlert'; // Correct path

const AssociateDetails = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [hasFiltered, setHasFiltered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleFilter = () => {
        setErrorMessage('');
        setShowAlert(false); // Hide alert before checking conditions

        if (!fromDate || !toDate) {
            setErrorMessage('Please select both From Date and To Date.');
            setShowAlert(true);
            return;
        }

        // Make sure dates are correctly parsed
        const formattedFromDate = format(fromDate, 'dd-MMM-yy');
        const formattedToDate = format(toDate, 'dd-MMM-yy');

        // Correct comparison
        if (formattedFromDate > formattedToDate) {
            setFilteredData([]); // Reset table data on error
            setErrorMessage('From Date cannot be later than To Date.');
            setShowAlert(true);
            return;
        }

        // Filter logic remains unchanged
        const result = dummyData.filter(associate => {
            const dates = Object.keys(associate.hours);
            return dates.some(date => {
                const parsedDate = parse(date, 'dd-MMM-yy', new Date());
                return isWithinInterval(parsedDate, { start: fromDate, end: toDate });
            });
        });

        if (result.length === 0) {
            setErrorMessage('No associates found for the selected date range.');
            setShowAlert(true);
        }

        setFilteredData(result);
        setHasFiltered(true);
    };


    const renderTable = () => {
        if (!hasFiltered) {
            return null;
        }

        if (!filteredData.length) {
            return null; // No data to render
        }

        const dateRange = [];
        let currentDate = new Date(fromDate);

        while (currentDate <= toDate) {
            dateRange.push(format(currentDate, 'dd-MMM-yy'));
            currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        }

        return (
            <table className="associate-table">
                <thead>
                <tr>
                    <th>Sl. No</th>
                    <th>Associate ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    {dateRange.map(date => (
                        <th key={date}>{date}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {filteredData.map((associate, index) => (
                    <tr key={associate.id}>
                        <td>{index + 1}</td>
                        <td>{associate.id}</td>
                        <td>{associate.name}</td>
                        <td>{associate.designation}</td>
                        {dateRange.map(date => (
                            <td key={date}>{associate.hours[date] || 0}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };


    return (
        <div className="associate-details-container">
            <h2 className="heading">Associate Details</h2>
            <div className="date-picker-container">
                <div className="date-picker">
                    <label>From Date:</label>
                    <DatePicker
                        selected={fromDate}
                        onChange={date => setFromDate(date)}
                        dateFormat="dd-MMM-yy"
                        placeholderText="Select from date"
                        showPopperArrow={false}
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                    />
                </div>
                <div className="date-picker">
                    <label>To Date:</label>
                    <DatePicker
                        selected={toDate}
                        onChange={date => setToDate(date)}
                        dateFormat="dd-MMM-yy"
                        placeholderText="Select to date"
                        showPopperArrow={false}
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                    />
                </div>
                <button className="filter-btn" onClick={handleFilter}>Show Details</button>
            </div>

            <CustomAlert
                show={showAlert}
                message={errorMessage}
                onClose={() => {
                    setShowAlert(false);
                    setErrorMessage(''); // Reset error message when alert is closed
                }}
            />

            <div className="table-container">
                {renderTable()}
            </div>
        </div>
    );
};

export default AssociateDetails;
