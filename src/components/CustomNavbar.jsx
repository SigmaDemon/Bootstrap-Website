import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import './CustomNavbar.css';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
`;

// In the react-bootstrap v4, Navbar.Header is no longer functional
// Copy-paste this code for the app to build the navbar from now on
export const CustomNavbar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Bootstrap Emporium</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/news">News</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)