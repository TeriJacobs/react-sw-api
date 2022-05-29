import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render(){
        return (
        <div>
            <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
            <Image className='App-logo'src="star-wars-logo.jpg" width="100rem"/>
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            <Nav  className="d-flex">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/people">People</Nav.Link>
                <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        </div>

    )}
}