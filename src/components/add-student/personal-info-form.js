import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import DatePickerInput from '../commons/date-picker-input';
import SelectInput from '../commons/select-input';
import { nationalities, religions, bloodGenotype, bloodGroup, genders } from '../../helpers/list-options';
import { Student } from '../../store/actions/create-student';

const PersonalInfo = () => {

	const personal = useSelector(state => state.StudentReducers);

	return (
		<Wrapper label={'Personal Information'}>
			<InputFloat placeholder={'First Name'} value={personal.first_name} onChange={(e) => ({ first_name: e.target.value })} action={Student} />
			<InputFloat placeholder={'Last Name'} value={personal.last_name} onChange={(e) => ({ last_name: e.target.value })} action={Student} />
			<InputFloat placeholder={'Other Name'} value={personal.other_name} required={false} onChange={(e) => ({ other_name: e.target.value })} action={Student} />
			<DatePickerInput placeholder={'Date of Birth'} value={personal.dob} onSelect={(e) => ({ dob: e.target.value })} action={Student}/>
			<SelectInput placeholder={'Gender'} list={genders} value={personal.gender}  onSelect={(e) => ({gender: e.target.textContent})} action={Student} />
			<SelectInput placeholder={'Religion'} list={religions} value={personal.religion}  onSelect={(e) => ({religion: e.target.textContent})} action={Student} />
			<DatePickerInput placeholder={'Admission Date'} value={personal.admission_date} onSelect={(e) => ({ admission_date: e.target.value })} action={Student}/>
			<SelectInput placeholder={'Nationality'} list={nationalities} value={personal.nationality}  onSelect={(e) => ({nationality: e.target.textContent})} action={Student} />
			<InputFloat placeholder={'Height'} value={personal.height} required={false} onChange={(e) => ({ height: e.target.value })} action={Student} />
			<SelectInput placeholder={'Blood Group'} list={bloodGroup} value={personal.blood_group}  onSelect={(e) => ({blood_group: e.target.textContent})} action={Student} />
			<SelectInput placeholder={'Blood Genotype'} list={bloodGenotype} value={personal.blood_genotype}  onSelect={(e) => ({blood_genotype : e.target.textContent})} action={Student} />
		</Wrapper>
	);
};

export default PersonalInfo;