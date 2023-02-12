import React, {useState} from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import Button from '../commons/button';
import SelectInput from '../commons/select-input';
import { parentRelationship } from '../../helpers/list-options';
import { studentParentInfo1, studentParentInfo2 } from '../../store/actions/create-student';
import {useSelector} from 'react-redux';

const ParentInfo = () => {

	const relationship1 = useSelector(state => state.StudentParentInfo1);
	const relationship2 = useSelector(state => state.StudentParentInfo2);

	const ParentComponent = (props) => {
		return (
			<Wrapper label = { props.relationship === '' ? 'Parent [Guardian\'s] Information' : `${props.relationship}'s Information`} >
				<InputFloat placeholder={'Name'}/>
				<InputFloat placeholder={'Occupation'}/>
				<InputFloat placeholder={'Phone Number 1'}/>
				<InputFloat placeholder={'Phone Number 2'}  required={false}/>
				<InputFloat placeholder={'Email Address'} required={false}/>
				<SelectInput placeholder={'Relationship'} list={parentRelationship}  value={props.relationship}  onSelect={(e) => ({relationship : e.target.textContent})} action={props.action} />
			</Wrapper >
		);
	};

	const [secondParent, setSecondParent] = useState(false);

	return (
		<>
			<ParentComponent relationship={relationship1.relationship} action={studentParentInfo1}/>
			{
				secondParent && <ParentComponent relationship={relationship2.relationship} action={studentParentInfo2}/>
			}
			<div className="w-full flex item-center justify-end">
				<Button action={() => setSecondParent(!secondParent)} borderColor={secondParent && 'border-red-900'} textVariant={secondParent && 'text-red-900'} bgVariant={secondParent && 'bg-red-900/[0.4]'}>{secondParent ? 'Collapse Field' : 'Add New Field'}</Button>
			</div>
		</>
	);
};

export default ParentInfo;