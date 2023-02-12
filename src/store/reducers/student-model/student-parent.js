import {initialState} from './initial-state';

export const StudentParentInfo1 = (state = initialState.parent_1, action) => {
	switch (action.type) {
	case 'PARENT_INFO1':
		return {...state, ...action.payload};
	default: return state;
	}
};

export const StudentParentInfo2 = (state = initialState.parent_2, action) => {
	switch (action.type) {
	case 'PARENT_INFO2':
		return {...state, ...action.payload};
	default: return state;
	}
};

