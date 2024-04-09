import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col } from "react-bootstrap"


const SingleProduct = ({ product }) => {
    return (
        <Col md={4} className="mb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <b>{product.price}</b> <br />
                        {product.description}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`/${product.id}`}>More Info</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct