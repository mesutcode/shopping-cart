import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
function Cardd(props) {
  const { products, handleProduct } = props;
  const renderCard = products.map((product) => (
    <Col xs={4} key={product.productCode}>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <h4>Price: {product.price}</h4>
          <Button variant="primary" onClick={() => handleProduct(product)}>
            Add Product
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
  //console.log(addItems);
  return (
    <section className="mt-3 mb-3">
      <Row>{renderCard}</Row>
    </section>
  );
}

export default Cardd;
