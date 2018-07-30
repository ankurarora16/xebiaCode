import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import authenticationReducer from './authenticationReducer';

export default combineReducers({
    authentication: authenticationReducer,
    planets: planetsReducer
});