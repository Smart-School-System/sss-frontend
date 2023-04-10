import React from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import { useSelector } from 'react-redux';
import { Student } from '../../store/actions/create-student';

const AddressInfo = () => {
    const address = useSelector(state => state.StudentReducers);
	return (
		<Wrapper label = { 'Address Information'} >
            <InputFloat placeholder={'Residential Address'} value={address.residential_address} onChange={(e) => ({ residential_address: e.target.value })} action={Student} />
            <InputFloat placeholder={'Postal Address'} required={false} value={address.postal_address} onChange={(e) => ({ postal_address: e.target.value })} action={Student} />
		</Wrapper >
	);
};

export default AddressInfo;