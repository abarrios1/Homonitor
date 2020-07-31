import React, { Component }from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import LoginButton from './LoginButton'

import logo from '../images/HomonitorLogo.png'

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav>

            <NavLink className="rounded d-inline p-2 bg-primary text-dark" to="/">
              <img src={logo} width={30} height={25} alt="Homonitor Logo"/>
            </NavLink>

            <NavLink className="rounded d-inline p-2 bg-primary text-dark" to="/">
              Home
            </NavLink>

            <NavLink className="rounded d-inline p-2 bg-primary text-dark" to="/netstats">
              Network Stats
            </NavLink>

            <NavLink className="rounded d-inline p-2 bg-primary text-dark" to="/about">
              About
            </NavLink>

          </Nav>
        </Navbar.Collapse>

        <LoginButton />

      </Navbar>
    )
  }
}

export default (Navigation);
