export const studentPersonalInfo = (value) => {
	return {
		type: 'STUDENT_PERSONAL',
		payload: value
	};
};
export const studentAddressInfo = (value) => {
	return {
		type: 'STUDENT_ADDRESS',
		payload: value
	};
};
export const studentParentInfo1 = (value) => {
	return {
		type: 'PARENT_INFO1',
		payload: value
	};
};
export const studentParentInfo2 = (value) => {
	return {
		type: 'PARENT_INFO2',
		payload: value
	};
};