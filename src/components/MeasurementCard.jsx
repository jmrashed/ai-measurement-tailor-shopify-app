// MeasurementCard.jsx

import React from 'react';

const MeasurementCard = ({ measurement }) => {
    return (
        <div className="measurement-card">
            <h3>{measurement.name}</h3>
            <p>Value: {measurement.value}</p>
            <p>Unit: {measurement.unit}</p>
            <div className="measurement-actions">
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
            </div>
        </div>
    );
};

export default MeasurementCard;
