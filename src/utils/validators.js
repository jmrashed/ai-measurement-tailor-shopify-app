// validators.js

export const isValidMeasurement = (measurement) => {
    const { name, value } = measurement;
    if (!name || !value) {
        return false;
    }
    return typeof value === 'number' && value > 0;
};

export const isValidProfile = (profile) => {
    const { firstName, lastName, email } = profile;
    if (!firstName || !lastName || !email) {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
