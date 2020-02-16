import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
    return (
        <header className="main-navigation">
            <Navbar expand="lg">
                <Container>
                    <Link className="nav-brand" to="/">
                        <img src="/images/logo.svg" alt="Logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/profile">Profile</Link>
                            <Link className="nav-link" to="/blog">Blog</Link>
                            <a className="nav-link" href="mailto:hello@reich-michael.com"><i className="fas fa-paper-plane"></i></a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}