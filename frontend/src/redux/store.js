import { createStore, combineReducers } from 'redux';
import activityReducer from './reducers';

const rootReducer = combineReducers({
    activity: activityReducer,
    // Add more reducers as needed
});

const store = createStore(rootReducer);

export default store;
