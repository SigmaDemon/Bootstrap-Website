import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/presidents.jpg" className="header-image" />
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>James the Champ</h3>
                        <p>He will be going to Washington to visit mount Rushmore.</p>
                        <p>After taking a course in politics, he will candidate to become the USA's next president.</p>
                    </Col>
                </Container>
            </div>
        )
    }
}
