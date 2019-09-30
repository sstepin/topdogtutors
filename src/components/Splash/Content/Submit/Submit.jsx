import React from 'react';
import './Submit.css';
import {Button} from 'react-bootstrap';

function Submit () {
    return (
        <React.Fragment>
            {/*Make this a form submit button*/}
            <Button style={{width:'100px', background:'#571846', color:'white', border: '#571846', borderRadius:'20px', paddingTop:'9px', paddingBottom:'9px', marginLeft:'20px', display:'inline', whiteSpace:'nowrap' }}>Go</Button>
        </React.Fragment>
    )
}

export default Submit;