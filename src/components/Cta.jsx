import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Zoom from 'react-reveal/Zoom';


function Cta() {
    return (
        <>
            <Container fluid className="cta" id="Reservations">
                <Container>
                    <Row className="cta-content">
                        <Col md={6}><Zoom><h2 className="cta-h2">A Best Place To Stay. Make Reservations Now!</h2></Zoom></Col>
                        <Col md={6}><Zoom><Button size="lg" className="cta-btn">Reserve Now</Button></Zoom></Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Cta;