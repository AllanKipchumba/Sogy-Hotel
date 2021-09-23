import React from "react";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import StarIcon from '@material-ui/icons/Star';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal/Zoom';
import Typed from "react-typed";
import {Link} from "react-router-dom";


function Header() {
    
    return (
        <Container fluid className="header">
            <NavBar/>
            <Container className="header-layer">
                <Zoom>
                    <div className="landing-text">
                        <h2>Welcome to sogy 5 <StarIcon className="star-icon" fontSize="small"/> Hotel</h2>
                        <Typed
                            strings={[
                                "The best place to be.",
                                "We make ordinary, extraordinary.",
                                "The most memorable rest time start here.",
                                "Come, stay and enjoy your day.",
                            ]}
                            typeSpeed={60}
                            backSpeed={60}
                            loop
                            showCursor={false}
                        >
                            <h1 />
                        </Typed>
                        <div>
                            <p>Make yourself home is our slogan. We offer the best beds in the industry.</p>
                            <p>Sleep well. Rest well</p>
                        </div>
                       
                    </div>

                    <Container>
                        <center><Button className="header-btn" size="lg"><Link to="/bookroom" className="header-btn-text">Reserve now</Link></Button></center>
                    </Container>
                </Zoom>
            </Container>              
        </Container>
    )
}

export default Header;