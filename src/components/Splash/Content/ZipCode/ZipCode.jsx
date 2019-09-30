import React from 'react';
import './ZipCode.css';
import {Row, Form} from 'react-bootstrap';


function ZipCode () {
    return(
        <Form.Group as={Row} size='sm' style={{display:'inline'}}>
            <Form.Label className = 'Near' column sm='2' >near</Form.Label>
            <Form.Control className = 'Zip' style={{display:'inline', border: 'none', background: 'transparent', fontSize:'20px'}} type='text' placeholder='Zip'  />
        </Form.Group>
    )
}

export default ZipCode;