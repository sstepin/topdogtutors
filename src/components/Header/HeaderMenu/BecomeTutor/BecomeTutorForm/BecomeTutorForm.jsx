import React from 'react';
import {Form, Container, Col, Row} from 'react-bootstrap';
import './BecomeTutorForm.css';
import useForm from '../../useForm/useForm.js';

const BecomeTutorForm = () => {

    const initialValues = {email: '', password: '',}

    const { values, handleChange, handleSubmit } = useForm(initialValues, register);

    function register() {

        console.log(values);
    }

    return (
        <section>
            <Container>
                <Col>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' onChange={handleChange} value={values.email} required />
                                <Form.Text className='text-muted'>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' onChange={handleChange} value={values.password} required/>
                            </Form.Group>
                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Verify Password</Form.Label>
                                <Form.Control type='password' placeholder='Re-enter password' onChange={handleChange} value={values.password} required/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Container>
        </section>
    )
}

export default BecomeTutorForm;