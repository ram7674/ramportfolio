import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

const Header = () => {
  return (
      <Navbar collapseOnSelect expand="lg" className='header-container'>
          <Navbar.Brand className='header-portfolio-card'>
            <img src='images/ram.jpg' alt='avatar' className='avatar'/>
            <p className='ram-name'>Ramakrishna</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='minu-btn' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className='nav-link-card'>
              <Nav.Link as={Link} to='#home' className='nav-links'>Home</Nav.Link>
              <Nav.Link as={Link} to='#project' className='nav-links'>Projects</Nav.Link>
              <Nav.Link as={Link} to='#skill' className='nav-links'>Skills</Nav.Link>
              <Nav.Link as={Link} to='#contact' className='nav-links'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;
