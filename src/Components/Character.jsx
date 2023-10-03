/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {Button, Card, Col} from 'react-bootstrap';

function Character (props) {
    const {id, name, image} = props;
    return(
            <Col xs={12} sm={6} lg={4} xxl={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                <p>{origin ? origin.name : "Unknown"}</p>
                                </Card.Text>
                            <Button variant="primary" as={Link} to={`/character/${id}`}>Ver detalles</Button>
                        </Card.Body>
                </Card>
            </Col>
    )
    
}

export default Character;