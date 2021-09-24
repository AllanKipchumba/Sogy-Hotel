import React from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Zoom from 'react-reveal/Zoom';


function BookRoom() {
    return(
        <>
        <Container fluid className="bookroom">
            <Container className="bookroom-hero">
                <Zoom><center><h1>Reservations</h1></center></Zoom>
                <Zoom>
                    <Form className="bookroom-form">        
                        <Row>
                            <Form.Group as={Col} column md={6}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group as={Col} column md={6}>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} column md={6}>
                                <Form.Label>Date Check In</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group as={Col} column md={6}>
                                <Form.Label>Date Check In</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} column md={6}>
                                <Form.Label>Adults</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>

                            <Form.Group as={Col} column md={6}>
                                <Form.Label>Children</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Row>

                        <Col column sm={6} md={3}>
                                <Button 
                                className="bookroom-btn"
                                column md={6}
                                type="button" 
                                variant="outline-warning" 
                                size="lg" >
                                Reserve Now</Button>
                        </Col>         
                </Form>
            </Zoom>
           </Container>
        </Container>
           
        </>
    )
}

export default BookRoom;