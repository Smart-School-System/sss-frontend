import {initialState} from './initial-state';

export const StudentPersonalInfo = (state = initialState.personal, action) => {
	switch (action.type) {
	case 'STUDENT_PERSONAL':
		return {...state, ...action.payload};
	default: return state;
	}
};

