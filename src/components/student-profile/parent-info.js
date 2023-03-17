import React, { useState } from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import SelectInput from '../commons/select-input';
import { parentRelationship } from '../../helpers/list-options';
import { FaEdit } from 'react-icons/fa';
import { IoSave } from 'react-icons/io5';
import { data } from '../../helpers/data';
import { Student } from '../../store/actions/create-student';

const ParentInfo = () => {

	const [disabled1, setDisabled1] = useState(true);
	const [disabled2, setDisabled2] = useState(true);
	const [secondParent, setSecondParent] = useState(false);

	const ParentComponent = (props) => {
		return (
			<Wrapper label={props.data.relationship === '' ? 'Parent [Guardian\'s] Information' : `${props.data.relationship}'s Information`} >
				<InputFloat placeholder={'Name'} value={props.data.parent_name} isDisabled={props.disabled} />
				<InputFloat placeholder={'Occupation'} value={props.data.occupation} isDisabled={props.disabled} />
				<InputFloat placeholder={'Phone Number 1'} value={props.data.phone_number_1} isDisabled={props.disabled} />
				<InputFloat placeholder={'Phone Number 2'} required={false} value={props.data.phone_number_2} isDisabled={props.disabled} />
				<InputFloat placeholder={'Email Address'} required={false} value={props.data.email_address} isDisabled={props.disabled} />
				<SelectInput placeholder={'Relationship'} list={parentRelationship} value={props.data.relationship} onSelect={(e) => ({ relationship: e.target.textContent })} action={props.action} isDisabled={props.disabled} />
				<div className='absolute z-10 top-4 right-0 w-auto h-auto flex justify-center items-center space-x-3'>
					{
						!data.parent[1] &&
                        <div className='p-2 text-base border-[1px] border-primaryBlue text-white bg-primaryBlue w-auto h-8 flex items-center justify-center space-x-1 rounded-lg cursor-pointer' onClick={() => setSecondParent(!secondParent)}>{secondParent ? 'Collapse Field' : 'Add New Field'}</div>
					}
					<div className='p-2 text-base border-[1px] border-primaryBlue text-primaryBlue w-auto h-8 flex items-center justify-center space-x-1 rounded-lg cursor-pointer' onClick={() => props.setter(!(props.disabled))}>
						{props.disabled ? <FaEdit /> : <IoSave />}
						<span>{props.disabled ? 'Edit' : 'Save'}</span>
					</div>
				</div>
			</Wrapper >
		);
	};

	const sampleData = {
		parent_name: null,
		phone_number_1: null,
		phone_number_2: null,
		email_address: null,
		relationship: null,
		occupation: null
	};

	return (
		<>
			<ParentComponent action={Student} data={{ ...data.parent[0] }} disabled={disabled1} setter={setDisabled1}/>
			{
				data.parent[1] ? <ParentComponent action={Student} data={{ ...data.parent[1] }} disabled={disabled2} setter={setDisabled2}/> :
					secondParent && <ParentComponent action={Student} data={{ ...sampleData }} disabled={disabled2} setter={setDisabled2}/>
			}
		</>
	);
};

export default ParentInfo;