import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FaTimes } from 'react-icons/fa';
import '../styles/alert-and-modal.css'; // Import the custom styles

const CustomAlert = ({ show, message, onClose }) => {
    if (!show) return null;

    return (
        <Alert variant="secondary" className="custom-alert">
            <div className="alert-header">
                <Alert.Heading>Alert: Please Check</Alert.Heading>
                <FaTimes className="close-icon" onClick={onClose} />
            </div>
            <p>{message}</p>
        </Alert>
    );
};

export default CustomAlert;
