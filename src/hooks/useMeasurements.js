// useMeasurements.js

import { useState, useEffect } from 'react';

const useMeasurements = () => {
    const [measurements, setMeasurements] = useState([]);

    useEffect(() => {
        // Load initial measurements from local storage or API
        const savedMeasurements = JSON.parse(localStorage.getItem('measurements')) || [];
        setMeasurements(savedMeasurements);
    }, []);

    const addMeasurement = (measurement) => {
        const updatedMeasurements = [...measurements, measurement];
        setMeasurements(updatedMeasurements);
        localStorage.setItem('measurements', JSON.stringify(updatedMeasurements));
    };

    const deleteMeasurement = (name) => {
        const updatedMeasurements = measurements.filter((m) => m.name !== name);
        setMeasurements(updatedMeasurements);
        localStorage.setItem('measurements', JSON.stringify(updatedMeasurements));
    };

    return { measurements, addMeasurement, deleteMeasurement };
};

export default useMeasurements;
