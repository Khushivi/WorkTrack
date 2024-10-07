const initialState = {
    dates: [],
    activeTimes: [],
    logs: [],
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SCREENSHOT_CONFIG':
            // Handle updating screenshot configuration
            return { ...state, screenshotConfig: action.payload };
        // Add more cases for different actions
        default:
            return state;
    }
};

export default activityReducer;
