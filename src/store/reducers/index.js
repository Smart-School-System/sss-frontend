import { combineReducers } from 'redux';
import { StudentReducers } from './student-model';

export const rootReducer = combineReducers({
	...StudentReducers
});

export default rootReducer;