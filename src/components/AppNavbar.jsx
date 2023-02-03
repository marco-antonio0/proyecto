import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const AppNavbar = () => {

    const navigate = useNavigate();


    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/login");
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className='nav-container'>
                    <Navbar.Brand as={Link} to="/" className='nav-title'>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login" className='icon'>login</Nav.Link>
                            <Nav.Link as={Link} to="/product/:id" className='icon'>product</Nav.Link>
                            <Nav.Link as={Link} to="/purchases" className='icon'>purchases</Nav.Link>
                            <Nav.Link onClick={handleShow} className='icon'> cart</Nav.Link>
                            <Nav.Link onClick={logout} className='icon'> LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={show} handleClose={handleClose}/>
        </>
    );
};

export default AppNavbar;