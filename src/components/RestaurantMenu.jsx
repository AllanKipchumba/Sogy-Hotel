import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Mains from "./Mains";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import Zoom from 'react-reveal/Zoom';


function RestaurantMenu() {
    const [element, setElement] = useState(<Mains/>);

    function showMains() {
        setElement( () => {
            return <Mains/>
        })
    }
    function showDesserts() {
        setElement( () => {
            return <Desserts/>
        })
    }
    function showDrinks() {
        setElement( () => {
            return <Drinks/>
        })
    }


    return (
        <>
            <Container fluid className="restaurant-menu">
                    <Container>
                        <center className="restaurant-menu-heading">
                        <Zoom><h1>Our Restaurant Menu</h1></Zoom>
                        <Zoom><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p></Zoom>
                        </center>
                        <Zoom>
                            <center>
                                <Button className="menu-btn" size="lg" onClick={showMains}>MAINS</Button>
                                <Button className="menu-btn" size="lg" onClick={showDesserts}>DESSERTS</Button>
                                <Button className="menu-btn" size="lg" onClick={showDrinks}>DRINKS</Button> 
                            </center>
                        </Zoom>
                        <div>
                            <Zoom>{element}</Zoom>
                        </div>
                    </Container>
            </Container>
        </>
    )
};

export default RestaurantMenu;