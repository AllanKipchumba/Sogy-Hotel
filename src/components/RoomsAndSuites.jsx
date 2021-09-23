import React from "react";
import rooms from "../items";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-reveal/Zoom';


function RoomsAndSuites() {
    return(
        <>
            <Container fluid id="Rooms">
                <Container className="rooms-and-suites">
                    <center className="section-heading">
                        <Zoom><h1>Rooms & Suites</h1></Zoom>
                        <Zoom><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p></Zoom>
                    </center>
                    <div>
                        <Row>
                                {rooms.map(room => {
                                    return (
                                        <>
                                            <Col sm={12} md={6} lg={4} className="rooms">
                                                <Zoom>
                                                    <div>
                                                        <Image className="img-fluid" src={room.imageSrc} alt="Room image"/>
                                                    </div>
                                                    <h2>{room.type}</h2>
                                                    <span>{room.cost}</span>
                                                </Zoom>
                                            </Col>
                                        </>
                                    )
                                })}
                        </Row>
                    </div>
                </Container>
            </Container>
        </>
    )
};

export default RoomsAndSuites;