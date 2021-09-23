import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from "react-bootstrap/esm/Button";
import { Avatar } from '@material-ui/core';



function Footer() {
    return (
        <>
            <Container fluid className="footer" id="footer">
                <Container>
                    <Row>
                        <Col className="footer-links">
                            <p><a href="#">About Us</a></p>
                            <p><a href="#">Terms & Conditions</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                        </Col>
                        <Col className="footer-links">
                            <p><a href="#">The Rooms & Suites</a></p>
                            <p><a href="#">Contact Us</a></p>
                            <p><a href="#">Restaurant</a></p>
                        </Col>
                        <Col className="footer-address">
                            <p>
                                <p><LocationOnIcon className="footer-icon"/> Address:</p>
                                <p>Off Mombasa Road Nairobi</p>
                            </p>
                            <p>
                                <p><PhoneIcon className="footer-icon"/> Phone:</p>
                                <p><a href="tel:+254 722 222 444">+254 722 222 444</a></p>
                            </p>
                            <p>
                                <p><EmailIcon className="footer-icon"/> Email:</p>
                                <p>sogy.mail@yahoo.com</p>
                            </p>
                        </Col>
                        <Col>
                            <p>Sign up for our newslater</p>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email..."/>
                                    <Button className="footer-btn" type="submit">Subscribe</Button>
                                </Form.Group>
                            </Form>
                        </Col>

                    </Row>
                </Container>
                <Row className="footer-developer">
                    <Container>
                        <Col>
                            <p>Copyright &copy;{new Date().getFullYear()} || Made with ❤ by Allan Kipchumba</p>
                        </Col>
                        <center>
                            <Avatar src="https://scontent.fnbo11-1.fna.fbcdn.net/v/t1.6435-9/66285204_2354271894830352_3087465153722056704_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uAATwbEoRA0AX9NSUqx&_nc_ht=scontent.fnbo11-1.fna&oh=12f3cb03dede104e89683bb1aa1a1091&oe=616731A7" alt="developer-profile"/>
                        </center> 
                        <Col className="contact">
                            <p><EmailIcon className="footer-icon"/> kipchumbaallan42@gmail.com</p>
                            <p><PhoneIcon className="footer-icon"/><a href="tel:+254 722 222 444"> +254 722 222 444</a></p>
                        </Col>
                        <Col className="developer-socials">
                            <a href="#"><FacebookIcon/></a>
                            <a href="#"><TwitterIcon/></a>
                            <a href="https://www.linkedin.com/in/allan-kipchumba-0504b51b7/"><LinkedInIcon/></a>
                            <a href="#"><GitHubIcon/></a>                           
                        </Col>
                    </Container>
                        
                    </Row>
            </Container>
        </>
    )
} 
export default Footer;