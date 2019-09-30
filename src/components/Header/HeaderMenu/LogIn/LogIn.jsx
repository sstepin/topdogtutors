import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import './LogIn.css';
import LogInForm from './LogInForm/LogInForm.js';
import useForm from '../useForm/useForm.js';

function LogIn () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {email: '', password: '',}

    const { values, handleSubmit} = useForm(initialValues, login);

    function login() {

        console.log(values);
    }

    return (
        <div>
            <Button className='LogIn' onClick={handleShow} style={{color: '#571846', background: 'transparent', border: 'none'}}>Log In</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LogInForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LogIn;