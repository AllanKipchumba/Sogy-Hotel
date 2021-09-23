import React from "react";
import {mains} from "../items";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Mains() {
    return (
        <>
            <Row>
                {mains.map(item => {
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

export default Mains;