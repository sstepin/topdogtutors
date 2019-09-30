import React from 'react';
import './Splash.css';
import splash_image from './Images/splash-image.png';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Content from './Content/Content.js';


function Splash () {
    return (
        <React.Fragment>

            <div className = "bg">
                <Content/>
            </div>

        </React.Fragment>


    )
}

export default Splash;