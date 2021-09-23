import React from "react";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import StarIcon from '@material-ui/icons/Star';
import Zoom from 'react-reveal/Zoom';
import Typed from "react-typed";


function BookRoomHeader() {
    
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
                                "Make reservations today.",
                                "Sleep well, rest well.",
                            ]}
                            typeSpeed={60}
                            backSpeed={60}
                            loop
                            showCursor={false}
                        >
                            <h1 />
                        </Typed>
                       
                       
                    </div>

                </Zoom>
            </Container>              
        </Container>
    )
}

export default BookRoomHeader;