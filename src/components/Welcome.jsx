import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal/Zoom';

function Welcome() {
    return (
        <>
            <Container className="welcome-section" fluid id="About">
                <Container className="content">
                    <Row>
                        <Col column lg={6} className="content-elements">
                            <Zoom><h1>Welcome!</h1></Zoom>
                            <Zoom>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!               
                                </p>
                                <span><Button variant="secondary" size="lg">Learn More</Button> <i>or</i> <a href="#">SEE VIDEO </a></span>
                            </Zoom>
                        </Col>
                        <Col column lg={6}>
                            <Zoom>
                                <Image src="https://preview.colorlib.com/theme/sogo/images/img_1.jpg" alt="Hotel room" fluid/>
                                <Image className="client-img" src="https://preview.colorlib.com/theme/sogo/images/xfood-1.jpg.pagespeed.ic.C-YkWFvGrQ.webp" alt="client" fluid/>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}

export default Welcome;