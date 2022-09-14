import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { CartNavbar } from '../cartNavbar/CartNavbar';


export const TopNavbar: React.FC = () => {
    return (
        <Navbar bg="light" className='mb-3' expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">FakeShop</Nav.Link>
                    <Nav.Link href="#link">О работе</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <CartNavbar />
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}