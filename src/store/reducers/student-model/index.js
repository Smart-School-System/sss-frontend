import { initialState } from './initial-state';

export const StudentReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'STUDENT':
            return { ...state, ...action.payload };
        default: return state;
    }
};

export default StudentReducers;