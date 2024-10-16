// MeasurementForm.jsx

import React, { useState } from 'react';

const MeasurementForm = ({ onSubmit }) => {
    const [measurement, setMeasurement] = useState({ name: '', value: '', unit: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeasurement({ ...measurement, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(measurement);
        setMeasurement({ name: '', value: '', unit: '' }); // Reset form after submission
    };

    return (
        <form onSubmit={handleSubmit} className="measurement-form">
            <div className="form-group">
                <label htmlFor="name">Measurement Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={measurement.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="value">Measurement Value:</label>
                <input
                    type="number"
                    id="value"
                    name="value"
                    value={measurement.value}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="unit">Measurement Unit:</label>
                <input
                    type="text"
                    id="unit"
                    name="unit"
                    value={measurement.unit}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-submit">Add Measurement</button>
        </form>
    );
};

export default MeasurementForm;
