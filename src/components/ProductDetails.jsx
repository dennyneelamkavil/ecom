import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productFetched, setProductFetched] = useState(false);

  const getProducts = ()=> {
    
    fetch('./products.json')
      .then((data) => data.json())
      .then((res) => setProducts(res.products));
      setProductFetched(true);
  }

  useEffect(() => {
    if(!productFetched){
      getProducts();
    }

      if (products.length > 0) {
        const res = products.find((product) => product.id === Number(id));
        setProduct(res);
      }

  }, [id, products, productFetched]);


  return (
    <Container>
      {product &&(
        <Row className='my-4'>
        <Col md={4}>
          <img src={product.image} alt={product.name} className='w-100'/>
        </Col>
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <h3>
                <b>{product.name}</b>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                {product.price}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                {product.description}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                <b>Brand : </b> {product.brand}
              </h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      )}
    </Container>
  )
}

export default ProductDetails