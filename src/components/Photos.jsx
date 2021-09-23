import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import {photoIitems} from "../items";
import Zoom from 'react-reveal/Zoom';


function Photos() {
    return (
        <>
            <Container fluid className="photos">
                <Container>
                    <center className="Photos-heading">
                        <Zoom><h1>Photos</h1></Zoom>
                        <Zoom><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p></Zoom>
                    </center>
                    <center>
                    <Zoom>
                        <Carousel fade className="carousel">
                                {photoIitems.map(item => {
                                    return (
                                        <Carousel.Item>
                                            <Image className="img-fluid" src={item.imageSrc} alt={item.alt}/>
                                            {/* <Carousel.Caption>
                                                <h3>{item.caption}</h3>
                                                <p>{item.description}</p>
                                            </Carousel.Caption> */}
                                        </Carousel.Item>
                                    )  
                                })}
                        </Carousel>
                        </Zoom>
                    </center>
                </Container>
            </Container>
        </>
    )
};
export default Photos;