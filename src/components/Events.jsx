import React from "react";
import {events} from "../items";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-reveal/Zoom';


function Events() {
    return (
        <>
            <Container fluid className="events">
                <Container className="events-hero">
                    <center>
                        <Zoom><h1>Events</h1></Zoom>
                        <Zoom><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p></Zoom>            
                    </center>  
                    <Row>
                        {events.map(event => {
                            return (
                                <>
                                    <Col sm={12} md={6} lg={4}>
                                        <Zoom>
                                            <Image className="img-fluid" src={event.imageSrc} alt="event" />
                                            <div className="events-content">
                                                <p>{event.date}</p>
                                                <h2>{event.heading}</h2>
                                                <p>{event.content}</p>
                                            </div>
                                        </Zoom>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>                 
                </Container>
            </Container>
        </>
    )
};

export default Events;