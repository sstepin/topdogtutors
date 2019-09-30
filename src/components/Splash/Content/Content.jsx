import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import TypeAhead from './TypeAhead/TypeAhead.js';
import Submit from './Submit/Submit.js';
import ZipCode from './ZipCode/ZipCode.js';
import './Content.css';
{/*import 'bootstrap/dist/css/bootstrap.min.css';*/}

 function Content () {
    return(
        <React.Fragment>
            <Container>
                  <Form>
                    <Form.Row>
                        <Col lg={{span:6, offset:1}} md={{span:6, offset:0}} sm={{span:12 , offset:1}}>
                            <div className="MainText">
                                Get top tutors at your doorstep.
                            </div>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{span:4, offset:3}} md={{span:6, offset:0}} sm={{span:7, offset:4}}>
                            <div className="SubText">
                                VETTED BY US, SCHEDULED BY YOU
                            </div>
                        </Col>
                    </Form.Row>
                    <br/>
                    <br/>
                        <Form.Row>
                            <Col lg={{span:2, offset:1}} md={{span:2, offset:0}} sm={{span:2, offset:1}}>
                                <TypeAhead/>
                            </Col>
                            <Col lg={{span:1, offset:1}} md={{span:1, offset:1}} sm={{span:1, offset:1}} style={{marginLeft:'20px'}}>
                                <Submit/>
                            </Col>
                        </Form.Row>
                        <Form.Row style={{display:'inline', whiteSpace:'nowrap'}}>
                            <Col lg={{size:3, offset:1}} md={{size:3, offset:0}} sm={{size:3, offset:1}} style={{maxWidth:'180px'}}>
                                <br/>
                                <ZipCode/>
                            </Col>
                        </Form.Row>
                    </Form>
            </Container>

        </React.Fragment>

    )

 }

 export default Content;