import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import "./Navbar.css"
import { FaIceCream } from 'react-icons/fa';




const Navigation = () => {
    return(
        <> 
            {/* <Navbar bg="dark" variant="dark"> */}
            <Navbar className="navbar">
                <Container>
                    <Row>
                        <Nav>
                            <Col className="iceCream" >
                                <FaIceCream />
                                <Nav.Link className='navLink' href="/home">Home</Nav.Link>
                                <Nav.Link className='navLink' href="/Map">Map</Nav.Link>
                                <Nav.Link className='navLink' href="/Metrics">Metrics</Nav.Link>
                            </Col>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;