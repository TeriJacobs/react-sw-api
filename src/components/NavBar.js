import React, { Component } from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import imageLogo from "./Icon/star-wars-logo.jpg"

export default class NavBar extends Component {
    render(){
        return (
        <div className="btei">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/people">
                <Image alt="StarWars Logo" src={imageLogo} width="80" height="80" className="d-inline-block align-top"/>{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link as={Link} to="/people/:id">Characters</Nav.Link>
                    <Nav.Link as={Link} to="/planets/">Planets</Nav.Link>
                    <Nav.Link as={Link} to="/planets/:id">Char</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )}
}