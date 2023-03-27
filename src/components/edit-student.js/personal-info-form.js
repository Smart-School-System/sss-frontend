import React, { useState } from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import DatePickerInput from '../commons/date-picker-input';
import SelectInput from '../commons/select-input';
import { nationalities, religions, bloodGenotype, bloodGroup, genders } from '../../helpers/list-options';
import { Student } from '../../store/actions/create-student';
import { FaEdit } from 'react-icons/fa';
import { IoSave } from 'react-icons/io5';

const PersonalInfo = (props) => {
	const [disabled, setDisabled] = useState(true);
	return (
		<Wrapper label={'Personal Information'}>
			<InputFloat placeholder={'First Name'} value={props.data.first_name} onChange={(e) => ({ firstname: e.target.value })} action={Student} isDisabled={disabled} />
			<InputFloat placeholder={'Last Name'} value={props.data.last_name} onChange={(e) => ({ lastname: e.target.value })} action={Student} isDisabled={disabled} />
			<InputFloat placeholder={'Other Name'} value={props.data.other_names} required={false} onChange={(e) => ({ othername: e.target.value })} action={Student} isDisabled={disabled} />
			<DatePickerInput placeholder={'Date of Birth'} value={props.data.dob} onSelect={(e) => ({ dob: e.target.value })} action={Student} isDisabled={disabled} />
			<SelectInput placeholder={'Gender'} list={genders} value={props.data.gender} onSelect={(e) => ({ gender: e.target.textContent })} action={Student} isDisabled={disabled} />
			<SelectInput placeholder={'Religion'} list={religions} value={props.data.religion} onSelect={(e) => ({ religion: e.target.textContent })} action={Student} isDisabled={disabled} />
			<DatePickerInput placeholder={'Admission Date'} value={props.data.admission_date} onSelect={(e) => ({ admission_date: e.target.value })} action={Student} isDisabled={disabled} />
			<SelectInput placeholder={'Nationality'} list={nationalities} value={props.data.nationality} onSelect={(e) => ({ nationality: e.target.textContent })} action={Student} isDisabled={disabled} />
			<InputFloat placeholder={'Height'} value={props.data.height} required={false} onChange={(e) => ({ height: e.target.value })} action={Student} isDisabled={disabled} />
			<SelectInput placeholder={'Blood Group'} list={bloodGroup} value={props.data.blood_group} onSelect={(e) => ({ blood_group: e.target.textContent })} action={Student} isDisabled={disabled} />
			<SelectInput placeholder={'Blood Genotype'} list={bloodGenotype} value={props.data.blood_genotype} onSelect={(e) => ({ blood_genotype: e.target.textContent })} action={Student} isDisabled={disabled} />
			<div className='absolute z-10 p-2 top-4 right-0 text-base border-[1px] border-primaryBlue text-primaryBlue w-auto h-8 flex items-center justify-center space-x-1 rounded-lg cursor-pointer' onClick={() => setDisabled(!disabled)}>
				{disabled ? <FaEdit /> : <IoSave/>}
				<span>{disabled ? 'Edit' : 'Save'}</span>
			</div>
		</Wrapper>
	);
};

export default PersonalInfo;