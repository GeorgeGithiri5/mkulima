import React, { Component } from 'react';
import {Nav,Navbar} from 'react-bootstrap'

class Naavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg='dark' expand="lg">
                    <Navbar.Brand href="/" style={{color:"#fff",fontSize:50,fontWeight:"bold"}}>
                    m<span style={{fontWeight:900,color:'#578890'}}>K</span>ulima
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{fontSize:"15px",color: "var(--mainBlue) !important"}}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/product">Products</Nav.Link>
                            <Nav.Link href="/blogs">Blog</Nav.Link>
                            <Nav.Link href="/About">About Us</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/sign-in">Sign-In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Naavbar;