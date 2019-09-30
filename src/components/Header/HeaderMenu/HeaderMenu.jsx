import React from 'react';
import './HeaderMenu.css';
import BecomeTutor from './BecomeTutor/BecomeTutor.js';
import LogIn from './LogIn/LogIn.js';
import {Navbar, Nav, Container, Row, Col, Button, Form} from 'react-bootstrap';

function HeaderMenu() {
    return(
        <React.Fragment>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Form>
                    <BecomeTutor/>
                    <LogIn/>
                </Form>
                {/*<Nav className="Menu" >
                    <Nav.Link id="Become-a-tutor" href="#become-a-tutor">Become A Tutor</Nav.Link>
                    <div>
                        <Nav.Link href="#log-in">
                            <div className='LogIn'>
                                Log In
                            </div>
                        </Nav.Link>
                    </div>
                </Nav>*/}

           </Navbar.Collapse>
        </React.Fragment>
    )
}

export default HeaderMenu;