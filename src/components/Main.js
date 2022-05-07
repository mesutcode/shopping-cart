import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Basket from './Basket';
import Cardd from './Cardd';
import Receipt from './Receipt';

function Main(props) {
  const { addProducts, products, handleProduct, removeProduct, soldProducts } =
    props;
  //console.log(products);
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} md={8} className="bg-warning">
            <Cardd products={products} handleProduct={handleProduct} />
          </Col>
          <Col xs={12} md={4} className="bg-secondary">
            <Basket
              addProducts={addProducts}
              handleProduct={handleProduct}
              removeProduct={removeProduct}
            />
          </Col>
        </Row>
        <Receipt soldProducts={soldProducts} />
      </Container>
    </section>
  );
}

export default Main;
