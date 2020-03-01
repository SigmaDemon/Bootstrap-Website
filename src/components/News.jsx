import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-man.png" className="header-image" />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Ever since I was 14, I wished to become a president and help my country to grow for the better!</p>
                            <p>In order to be elected president, a person must meet the eligibility requirements laid out in the Constitution. After that, the person must secure his or her party’s nomination. Finally, he or she must face a demanding campaign and election process.</p>
                            <p>I will not give up on achieving my goal because I onsider it to be my journey towards becoming a better person and giving back to the country that offered me so much!</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/presidents.jpg" />
                            <p>My favourite presidents are being displayed at this monument!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
