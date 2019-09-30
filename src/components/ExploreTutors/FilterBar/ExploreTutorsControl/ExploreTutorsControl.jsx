import React from 'react';
import {Container, Row, Col, Dropdown, ButtonToolbar} from 'react-bootstrap';
import './ExploreTutorsControl.css';

function ExploreTutorsControl () {
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='Text'>Explore Tutors</div>
                        {/*<ButtonToolbar>
                            <Dropdown>
                                <Dropdown.Toggle variant="transparent">
                                    <div className='Text'>
                                        EXPLORE TUTORS
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Another Action</Dropdown.Item>
                                    <Dropdown.Item>Something Else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ButtonToolbar>
                        */}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
    }

export default ExploreTutorsControl;
