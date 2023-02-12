import React, {useState} from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import { FaEdit } from 'react-icons/fa';
import { IoSave } from 'react-icons/io5';
import {data} from '../../helpers/data';


const AddressInfo = () => {
	const [disabled, setDisabled] = useState(true);

	return (
		<Wrapper label = { 'Address Information'} >
			<InputFloat placeholder={'Residential Address'} isDisabled={disabled} value={data.address.residential_address}/>
			<InputFloat placeholder={'Postal Address'} isDisabled={disabled} required={false} value={data.address.postal_address}/>
			<div className='absolute z-10 p-2 top-4 right-0 text-base border-[1px] border-primaryBlue text-primaryBlue w-auto h-8 flex items-center justify-center space-x-1 rounded-lg cursor-pointer' onClick={() => setDisabled(!disabled)}>
				{disabled ? <FaEdit /> : <IoSave />}
				<span>{disabled ? 'Edit' : 'Save'}</span>
			</div>
		</Wrapper >
	);
};

export default AddressInfo;