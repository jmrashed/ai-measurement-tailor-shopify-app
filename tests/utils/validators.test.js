// validators.test.js

import { isValidMeasurement, isValidProfile } from '../../src/utils/validators';

describe('Validators', () => {
    describe('isValidMeasurement', () => {
        test('valid measurement', () => {
            const measurement = { name: 'Waist', value: 32 };
            expect(isValidMeasurement(measurement)).toBe(true);
        });

        test('invalid measurement with no name', () => {
            const measurement = { value: 32 };
            expect(isValidMeasurement(measurement)).toBe(false);
        });

        test('invalid measurement with no value', () => {
            const measurement = { name: 'Waist' };
            expect(isValidMeasurement(measurement)).toBe(false);
        });

        test('invalid measurement with negative value', () => {
            const measurement = { name: 'Waist', value: -32 };
            expect(isValidMeasurement(measurement)).toBe(false);
        });

        test('invalid measurement with non-numeric value', () => {
            const measurement = { name: 'Waist', value: 'thirty-two' };
            expect(isValidMeasurement(measurement)).toBe(false);
        });
    });

    describe('isValidProfile', () => {
        test('valid profile', () => {
            const profile = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
            expect(isValidProfile(profile)).toBe(true);
        });

        test('invalid profile with missing firstName', () => {
            const profile = { lastName: 'Doe', email: 'john.doe@example.com' };
            expect(isValidProfile(profile)).toBe(false);
        });

        test('invalid profile with missing lastName', () => {
            const profile = { firstName: 'John', email: 'john.doe@example.com' };
            expect(isValidProfile(profile)).toBe(false);
        });

        test('invalid profile with missing email', () => {
            const profile = { firstName: 'John', lastName: 'Doe' };
            expect(isValidProfile(profile)).toBe(false);
        });

        test('invalid profile with invalid email format', () => {
            const profile = { firstName: 'John', lastName: 'Doe', email: 'john.doe.com' };
            expect(isValidProfile(profile)).toBe(false);
        });
    });
});
