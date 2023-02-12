import React from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';

const AddressInfo = () => {
	return (
		<Wrapper label = { 'Address Information'} >
			<InputFloat placeholder={'Residential Address'} />
			<InputFloat placeholder={'Postal Address'} required={false} />
		</Wrapper >
	);
};

export default AddressInfo;