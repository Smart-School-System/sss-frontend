import {initialState} from './initial-state';

export const StudentAddressInfo = (state = initialState.address, action) => {
	switch (action.type) {
	case 'STUDENT_ADDRESS':
		return {...state, ...action.payload};
	default: return state;
	}
};