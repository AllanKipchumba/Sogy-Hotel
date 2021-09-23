import React from "react";
import {clientTestimonials} from "../items";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Avatar } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonials() {
    return (
        <>
            <Container className="testimonials">
                <h1>People Says</h1>

                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col sm={6}>
                                <center><Avatar alt="client" src={clientTestimonials[0].imageSrc}/></center>
                                <p>{clientTestimonials[0].testimony}</p>
                                <center>{clientTestimonials[0].name}</center>
                            </Col>

                                <Col sm={6}>
                                <center><Avatar alt="client" src={clientTestimonials[0].imageSrc}/></center>
                                <p>{clientTestimonials[0].testimony}</p>
                                <center>{clientTestimonials[0].name}</center>
                            </Col>
                        </Row>                       
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <center><Avatar alt="client" src={clientTestimonials[0].imageSrc}/></center>
                        <p>{clientTestimonials[0].testimony}</p>
                        <center>{clientTestimonials[0].name}</center>

                        <center><Avatar alt="client" src={clientTestimonials[1].imageSrc}/></center>
                        <p>{clientTestimonials[1].testimony}</p>
                        <center>{clientTestimonials[1].name}</center>
                    </Carousel.Item>
                    <Carousel.Item>
                        <center><Avatar alt="client" src={clientTestimonials[0].imageSrc}/></center>
                        <p>{clientTestimonials[0].testimony}</p>
                        <center>{clientTestimonials[0].name}</center>

                        <center><Avatar alt="client" src={clientTestimonials[1].imageSrc}/></center>
                        <p>{clientTestimonials[1].testimony}</p>
                        <center>{clientTestimonials[1].name}</center>
                    </Carousel.Item> */}
                </Carousel>

                {/* <Row>
                    <Carousel>
                            {clientTestimonials.map( item => {
                                return (
                                    
                                        <Carousel.Item>                  
                                            <center><Avatar alt="client" src={item.imageSrc}/></center>
                                            <p>{item.testimony}</p>
                                            <center>{item.name}</center>
                                        </Carousel.Item>
                                    
                                )
                            })}
                    </Carousel>
                </Row> */}
            </Container>
        </>
    )
}
export default Testimonials;