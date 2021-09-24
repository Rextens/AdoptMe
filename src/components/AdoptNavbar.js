import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import React, { useState } from 'react';
import { Hexagon, ResponsiveHoneycomb } from 'react-honeycomb'
import "bootstrap/dist/css/bootstrap.min.css";

const AdoptNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="fixed-top AdoptNavbar" light expand="xs">
          
          <NavbarBrand href="/">
            <img className="Logo" src="/images/adopt_me_logo.png"/>
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto">
              <NavItem className="NavbarIcon">
                <a href="/"> 
                  <i className="icon-twitter-bird" style={{color: '#00ACEE'}}/>
                </a>
              </NavItem>

              <NavItem className="NavbarIcon">
                <a href="/"> 
                  <i className="icon-facebook-rect" style={{color: '#3B5998'}}/>
                </a>
              </NavItem>

              <NavItem className="NavbarIcon">
                <a href="/"> 
                  <i className="icon-instagram-filled" style={{color: '#FF9D00'}}/>
                </a>
              </NavItem>

              <NavItem className="NavbarIcon">
                <a href="/"> 
                  <i className="icon-youtube" style={{color: '#C4302B'}}/>
                </a>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    )
}

export default AdoptNavbar