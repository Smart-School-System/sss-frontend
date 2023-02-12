import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import DatePickerInput from '../commons/date-picker-input';
import SelectInput from '../commons/select-input';
import { nationalities, religions, bloodGenotype, bloodGroup, genders } from '../../helpers/list-options';
import { studentPersonalInfo } from '../../store/actions/create-student';

const PersonalInfo = () => {

	const personal = useSelector(state => state.StudentPersonalInfo);

	return (
		<Wrapper label={'Personal Information'}>
			<InputFloat placeholder={'First Name'} value={personal.firstname} onChange={(e) => ({ firstname: e.target.value })} action={studentPersonalInfo} />
			<InputFloat placeholder={'Last Name'} value={personal.lastname} onChange={(e) => ({ lastname: e.target.value })} action={studentPersonalInfo} />
			<InputFloat placeholder={'Other Name'} value={personal.othername} required={false} onChange={(e) => ({ othername: e.target.value })} action={studentPersonalInfo} />
			<DatePickerInput placeholder={'Date of Birth'} value={personal.dob} onSelect={(e) => ({ dob: e.target.value })} action={studentPersonalInfo}/>
			<SelectInput placeholder={'Gender'} list={genders} value={personal.gender}  onSelect={(e) => ({gender: e.target.textContent})} action={studentPersonalInfo} />
			<SelectInput placeholder={'Religion'} list={religions} value={personal.religion}  onSelect={(e) => ({religion: e.target.textContent})} action={studentPersonalInfo} />
			<DatePickerInput placeholder={'Admission Date'} value={personal.admission_date} onSelect={(e) => ({ admission_date: e.target.value })} action={studentPersonalInfo}/>
			<SelectInput placeholder={'Nationality'} list={nationalities} value={personal.nationality}  onSelect={(e) => ({nationality: e.target.textContent})} action={studentPersonalInfo} />
			<InputFloat placeholder={'Height'} value={personal.height} required={false} onChange={(e) => ({ height: e.target.value })} action={studentPersonalInfo} />
			<SelectInput placeholder={'Blood Group'} list={bloodGroup} value={personal.blood_group}  onSelect={(e) => ({blood_group: e.target.textContent})} action={studentPersonalInfo} />
			<SelectInput placeholder={'Blood Genotype'} list={bloodGenotype} value={personal.blood_genotype}  onSelect={(e) => ({blood_genotype : e.target.textContent})} action={studentPersonalInfo} />
		</Wrapper>
	);
};

export default PersonalInfo;