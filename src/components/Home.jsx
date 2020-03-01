import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import { Container } from "react-bootstrap"; // Grid is replaced with Container in react-bootstrap
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to the Bootstrap Emporium</h2>
                    <p>This is how to build a website using React combined with React-Router & React-Bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">Learn More</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>James</h3>
                        <p>This person likes tall building and wishes to be president. We'll send him to Washington.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jfif" circle className="profile-pic" />
                        <h3>Kelly</h3>
                        <p>She loves travelling in exotic countries. We'll send her to Africa to photograph wild animals.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jfif" circle className="profile-pic" />
                        <h3>Steve</h3>
                        <p>He is a student that received enough credits to study abroad. We'll offer him a bursary at Oxford.</p>
                    </Col>
                </Row>

            </Container>
        )
    }
}
