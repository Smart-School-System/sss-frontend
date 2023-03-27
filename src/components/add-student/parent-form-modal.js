import React, { useState } from 'react'
import { Modal } from 'antd'
import InputFloat from '../commons/floating-input'
import SelectInput from '../commons/select-input'
import Wrapper from './wrapper'
import { Button } from '../commons/button';
import { parentRelationship } from '../../helpers/list-options'
import { toast } from 'react-toastify'
import { validateParentDetails } from '../../helpers/form-validations/parent-details'


const ParentFormModal = (props) => {
    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [other_contact, setOtherContact] = useState('')
    const [familial_relation, setFamilialRelation] = useState('')

    const handleClose = () => {
        props.onClose()
    }

    const resetForm = () => {
        setName('')
        setOccupation('')
        setOtherContact('')
        setEmail('')
        setFamilialRelation('')
        setContact('')
    }

    const handleButtonClick = () => {
        const {error } = validateParentDetails.validate({ name, occupation, email, contact, other_contact, familial_relation })
        if(error) return toast.error(error.message)

        props.addNewParent({
            name,
            occupation,
            email,
            contact,
            other_contact,
            familial_relation
        })
        toast.success('Parent details recorded successfully')
        resetForm()
        props.onClose()
    }

    return (
        <Modal open={props.isOpen} onCancel={handleClose} footer={false} width={'80%'}>
            <Wrapper label={familial_relation === '' ? 'Parent [Guardian\'s] Information' : `${familial_relation}'s Information`} >
                <InputFloat placeholder={'Name'} value={name} triggerChange={setName} />
                <InputFloat placeholder={'Occupation'} value={occupation} triggerChange={setOccupation} />
                <InputFloat placeholder={'Email Address'} required={false} value={email} triggerChange={setEmail} />
                <InputFloat placeholder={'Contact'} required={false} value={contact} triggerChange={setContact} />
                <InputFloat placeholder={'Other contact'} required={false} value={other_contact} triggerChange={setOtherContact} />
                <SelectInput placeholder={'Relationship'} list={parentRelationship} value={familial_relation} triggerChange={(e) => setFamilialRelation(e.target.textContent)} />
            </Wrapper >
            <div className="w-full flex item-center justify-end">
                <Button action={handleButtonClick}>Add Parent</Button>
            </div>
        </Modal>
    )
}

export default ParentFormModal