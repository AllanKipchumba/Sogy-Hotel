import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Zoom from 'react-reveal/Zoom';
import {Link} from "react-router-dom";


function Cta() {
    return (
        <>
            <Container fluid className="cta" id="Reservations">
                <Container>
                    <Row className="cta-content">
                        <Col md={6}><Zoom><h2 className="cta-h2">A Best Place To Stay. Make Reservations Now!</h2></Zoom></Col>
                        <Col md={6}><Zoom><Button size="lg" className="cta-btn"><Link to="/bookroom" className="header-btn-text">Reserve now</Link></Button></Zoom></Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Cta;