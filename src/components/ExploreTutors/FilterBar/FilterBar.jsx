import React from 'react';
import './FilterBar.css';
import {Container, Row, Col} from 'react-bootstrap';
import ExploreTutorsControl from './ExploreTutorsControl/ExploreTutorsControl.js';

function FilterBar(){
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={4} sm={0}>
                        <div className = 'Colleges'>
                            from Stanford, Princeton, UC Berkeley, more
                        </div>
                    </Col>
                     <Col sm={{size:1, offset:2}} md={{size:1, offset:2}} lg={{size:1, offset:1}}>
                        <div>
                            <ExploreTutorsControl/>
                        </div>
                    </Col>
                    <Col>
                        <div className = 'Subjects'>
                            Coding, SAT Prep, Calculus, more
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FilterBar;