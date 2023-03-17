import { combineReducers } from 'redux';
import { StudentReducers } from './student-model';
import { PopulateStudents } from './population'

export const rootReducer = combineReducers({
    StudentReducers,
    PopulateStudents
});

export default rootReducer;