import React from "react";
import {dessert} from "../items";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Desserts() {
    return (
        <>
            <Row>
                {dessert.map(item => {
                    return (
                        <>  
                            <Col md={6} className="food-menu">
                                <h4>{item.cost}</h4>
                                <h3>{item.item}</h3>
                                <p>{item.description}</p>
                            </Col>                      
                        </>                   
                    )
                })}
            </Row>
        </>
    )
};

export default Desserts;