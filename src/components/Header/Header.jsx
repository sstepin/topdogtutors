import React from 'react';
import logo_draft from '../../Images/logo_draft.png';
import {Navbar} from 'react-bootstrap';
import './Header.css';
import HeaderMenu from './HeaderMenu/HeaderMenu.js';


function Header() {
   return (
      <React.Fragment>
         <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand href="http://topdogtutors.com">
               <img
                  src={logo_draft}
                  width="100%"
                  height = "100%"
                  className="App-logo d-inline-block align-top"
                  alt="logo" />
            </Navbar.Brand>
            <HeaderMenu/>
         </Navbar>
      </React.Fragment>
   );
}

export default Header;