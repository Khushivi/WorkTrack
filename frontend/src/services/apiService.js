import axios from 'axios';

const API_URL = 'http://your-api-url.com/api'; // Replace with your API URL

export const getActivityData = () => {
    return axios.get(`${API_URL}/activity`);
};

export const updateScreenshotConfig = (config) => {
    return axios.put(`${API_URL}/screenshot-config`, config);
};

// Add more API functions as needed
