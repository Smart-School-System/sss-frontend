import React, { useState } from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import Button from '../commons/button';
import SelectInput from '../commons/select-input';
import { parentRelationship } from '../../helpers/list-options';
import { Student } from '../../store/actions/create-student';
import { useSelector } from 'react-redux';

const ParentInfo = () => {

    const parents = useSelector(state => state.StudentReducers.parents);

    const ParentComponent = (props) => {
        return (
            <Wrapper label={props.familial_relation === '' ? 'Parent [Guardian\'s] Information' : `${props.familial_relation}'s Information`} >
                <InputFloat placeholder={'Name'} value={props.data.name} onChange={(e) => (parents[0]['name'] = e.target.value )} action={Student} />
                <InputFloat placeholder={'Occupation'} value={props.data.occupation} onChange={(e) => ({ occupation: e.target.value })} action={Student} />
                <InputFloat placeholder={'Contact'} value={props.data.contact} onChange={(e) => ({ contact: e.target.value })} action={Student} />
                <InputFloat placeholder={'Other contact'} required={false} value={props.data.other_contact} onChange={(e) => ({ other_contact: e.target.value })} action={Student} />
                <InputFloat placeholder={'Email Address'} required={false} value={props.data.contact} onChange={(e) => ({ contact: e.target.value })} action={Student} />
                <SelectInput placeholder={'Relationship'} list={parentRelationship} value={props.data.familial_relation} onSelect={(e) => (props.data.familial_relation = e.target.textContent)} action={props.action} />
            </Wrapper >
        );
    };

    const [secondParent, setSecondParent] = useState(false);

    return (
        <>
            <ParentComponent familial_relation={parents[0].familial_relation} action={Student} data={parents[0]} />
            {
                secondParent && <ParentComponent familial_relation={parents[1].familial_relation} action={Student} data={parents[1]} />
            }
            <div className="w-full flex item-center justify-end">
                <Button action={() => setSecondParent(!secondParent)} borderColor={secondParent && 'border-red-900'} textVariant={secondParent && 'text-red-900'} bgVariant={secondParent && 'bg-red-900/[0.4]'}>{secondParent ? 'Collapse Field' : 'Add New Field'}</Button>
            </div>
        </>
    );
};

export default ParentInfo;