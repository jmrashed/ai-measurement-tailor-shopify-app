// MeasurementCard.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import MeasurementCard from '../../src/components/MeasurementCard';

describe('MeasurementCard', () => {
    const mockMeasurement = {
        name: 'Chest',
        value: 40,
    };

    test('renders measurement name and value', () => {
        render(<MeasurementCard measurement={mockMeasurement} />);

        const measurementName = screen.getByText(/chest/i);
        const measurementValue = screen.getByText(/40/i);

        expect(measurementName).toBeInTheDocument();
        expect(measurementValue).toBeInTheDocument();
    });

    test('displays a delete button', () => {
        render(<MeasurementCard measurement={mockMeasurement} />);

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        expect(deleteButton).toBeInTheDocument();
    });
});
