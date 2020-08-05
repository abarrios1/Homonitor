import React, { Component }from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import LoginButton from './LoginButton'

import logo from '../images/HomonitorLogo.png'

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg">

        <Navbar.Brand className="rounded d-inline p-2 bg-primary text-dark d-inline-block align-top" href="/">
          <img src={logo} width={30} height={25} mode="fit" alt="Homonitor Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">

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

            <LoginButton />

        </Navbar.Collapse>

      </Navbar>
    )
  }
}

export default (Navigation);
