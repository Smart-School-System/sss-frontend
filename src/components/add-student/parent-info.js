import React, { useState } from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import Button from '../commons/button';
import SelectInput from '../commons/select-input';
import { parentRelationship } from '../../helpers/list-options';

const ParentInfo = () => {
    const [parent, setParent] = useState([]);
    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [other_contact, setOtherContact] = useState('')
    const [familial_relation, setFamilialRelation] = useState('')

    const [secondParent, setSecondParent] = useState(false);

    const handleButtonClick = () => {
        setParent([...parent, { name, occupation, email, contact, other_contact, familial_relation }])
        setSecondParent(!secondParent)
    }

    return (
        <>
            <Wrapper label={familial_relation === '' ? 'Parent [Guardian\'s] Information' : `${familial_relation}'s Information`} >
                <InputFloat placeholder={'Name'} value={name} triggerChange={setName} />
                <InputFloat placeholder={'Occupation'} value={occupation} triggerChange={setOccupation} />
                <InputFloat placeholder={'Email Address'} required={false} value={email} triggerChange={setEmail} />
                <InputFloat placeholder={'Contact'} required={false} value={contact} triggerChange={setContact} />
                <InputFloat placeholder={'Other contact'} required={false} value={other_contact} triggerChange={setOtherContact} />
                <SelectInput placeholder={'Relationship'} list={parentRelationship} value={familial_relation} triggerChange={(e) => setFamilialRelation(e.target.textContent)} />
            </Wrapper >
            {
                secondParent && <Wrapper label={familial_relation === '' ? 'Parent [Guardian\'s] Information' : `${familial_relation}'s Information`} >
                    <InputFloat placeholder={'Name'} value={name} triggerChange={setName} />
                    <InputFloat placeholder={'Occupation'} value={occupation} triggerChange={setOccupation} />
                    <InputFloat placeholder={'Email Address'} required={false} value={email} triggerChange={setEmail} />
                    <InputFloat placeholder={'Contact'} required={false} value={contact} triggerChange={setContact} />
                    <InputFloat placeholder={'Other contact'} required={false} value={other_contact} triggerChange={setOtherContact} />
                    <SelectInput placeholder={'Relationship'} list={parentRelationship} value={familial_relation} triggerChange={(e) => setFamilialRelation(e.target.textContent)} />
                </Wrapper >
            }
            <div className="w-full flex item-center justify-end">
                <Button action={handleButtonClick} borderColor={secondParent && 'border-red-900'} textVariant={secondParent && 'text-red-900'} bgVariant={secondParent && 'bg-red-900/[0.4]'}>{secondParent ? 'Collapse Field' : 'Add New Field'}</Button>
            </div>
        </>
    );
};

export default ParentInfo;