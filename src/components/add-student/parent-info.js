import React, { useState, useEffect, useCallback } from 'react';
import Wrapper from './wrapper';
import InputFloat from '../commons/floating-input';
import { Button } from '../commons/button';
import SelectInput from '../commons/select-input';
import { parentRelationship } from '../../helpers/list-options';
import ParentFormModal from './parent-form-modal';

const ParentInfo = (props) => {
    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [email_address, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [other_contact, setOtherContact] = useState('')
    const [familial_relation, setFamilialRelation] = useState('')

    const [modal, setModal] = useState(false)

    const handleChanges = useCallback(() => {
        props.setParents([{
            name,
            occupation,
            email_address,
            contact,
            other_contact,
            familial_relation
        }])
    }, [name, occupation, email_address, contact, other_contact, familial_relation])


    useEffect(() => {
        handleChanges()
    }, [handleChanges])


    const addNewParent = (data) => {
        props.setParents([...props.parents, data])
    }

    return (
        <>
            <Wrapper label={familial_relation === '' ? 'Parent [Guardian\'s] Information' : `${familial_relation}'s Information`} >
                <InputFloat placeholder={'Name'} value={name} triggerChange={setName} />
                <InputFloat placeholder={'Occupation'} value={occupation} triggerChange={setOccupation} />
                <InputFloat placeholder={'Email Address'} required={false} value={email_address} triggerChange={setEmail} />
                <InputFloat placeholder={'Contact'} required={false} value={contact} triggerChange={setContact} />
                <InputFloat placeholder={'Other contact'} required={false} value={other_contact} triggerChange={setOtherContact} />
                <SelectInput placeholder={'Relationship'} list={parentRelationship} value={familial_relation} triggerChange={(e) => setFamilialRelation(e.target.textContent)} />
            </Wrapper >
            <div className="w-full flex item-center justify-end">
                <Button action={() => setModal(prev => !prev)}>Add New Field</Button>
                <ParentFormModal isOpen={modal} onClose={() => setModal(false)} addNewParent={addNewParent}/>
            </div>
        </>
    );
};

export default ParentInfo;