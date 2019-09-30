import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import './LogInForm.css';
import useForm from '../../useForm/useForm.js';



const LogInForm = () => {

    const initialValues = {email: '', password: '',}

    const { values, validated, handleChange, handleSubmit } = useForm(initialValues, login);
    {/*const { values, handleChange, handleSubmit } = [1];*/}

    function login() {

        console.log(values);
    }

    return (
        <section>
            <Container>
                <Col>
                    <Form>
                    {/*<Form onSubmit={handleSubmit}>*/}
                        <Form.Row>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Email Address</Form.Label>
                                {/*<Form.Control type='email' placeholder='Enter email' onChange={handleChange} name={email} value={values.email || ''} required/>*/}
                                <Form.Control type='email' placeholder='Enter email' onChange={handleChange} value={values.email} required />
                                <Form.Text className='text-muted'>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' onChange={handleChange} value={values.password} required/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>

            </Container>
        </section>
    );
};

export default LogInForm;