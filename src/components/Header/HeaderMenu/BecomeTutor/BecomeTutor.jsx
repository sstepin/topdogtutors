import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import './BecomeTutor.css';
import BecomeTutorForm from './BecomeTutorForm/BecomeTutorForm.js';
import useForm from '../useForm/useForm.js';

function BecomeTutor() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {email: '', password: '',}

    const { values, handleSubmit} = useForm(initialValues, register);

    function register() {

        console.log(values);
    }

    return (
    <div>
        <Button className='BecomeTutor' onClick={handleShow} style={{color: '#571846', background: 'transparent', border: 'none'}}>Become A Tutor</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BecomeTutorForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Cancel</Button>
                <Button variant='primary' onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>


    </div>

    )
}

export default BecomeTutor;