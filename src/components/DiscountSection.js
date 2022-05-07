import React from 'react';
import { Col, Row } from 'react-bootstrap';
function DiscountSection(props) {
  const { soldProducts } = props;

  const getSum = (a, b) => a + b;
  let total = soldProducts.map((item) => item.subTotal);
  let discount = soldProducts.map((item) => item.discount);

  let subTotal = total.reduce(getSum, 0);
  let totalDiscount = discount.reduce(getSum, 0);
  let savings = soldProducts.map(
    (product, i) =>
      product.discount > 0 && (
        <Row
          className="bg-warning justify-content-md-center"
          key={i * subTotal}
        >
          <Col xs={3} className="bg-dark text-warning">
            {product.name}
          </Col>
          <Col xs={1} className="bg-dark text-warning">
            -{product.discount}
          </Col>
        </Row>
      )
  );

  console.log('total', total);
  console.log('discount--', soldProducts);
  return (
    <div>
      <Row className="bg-warning justify-content-md-center">
        <Col xs={4} className="bg-dark text-warning">
          ------
        </Col>
      </Row>
      <Row className="bg-warning justify-content-md-center">
        <Col xs={3} className="bg-dark text-warning">
          Sub-Total
        </Col>
        <Col xs={1} className="bg-dark text-warning">
          {subTotal}
        </Col>
      </Row>
      <Row className="bg-warning justify-content-md-center">
        <Col xs={4} className="bg-dark text-warning">
          Savings
        </Col>
      </Row>
      {savings}
      <Row className="bg-warning justify-content-md-center">
        <Col xs={4} className="bg-dark text-warning">
          ------
        </Col>
      </Row>
      <Row className="bg-warning justify-content-md-center">
        <Col xs={3} className="bg-dark text-warning">
          Total Saving
        </Col>
        <Col xs={1} className="bg-dark text-warning">
          -{totalDiscount}
        </Col>
      </Row>
      <Row className="bg-warning justify-content-md-center">
        <Col xs={4} className="bg-dark text-warning">
          -------------------------------------------------------
        </Col>
      </Row>
      <Row className="bg-warning justify-content-md-center">
        <Col xs={3} className="bg-dark text-warning">
          Total to Pay
        </Col>
        <Col xs={1} className="bg-dark text-warning">
          {subTotal - totalDiscount}
        </Col>
      </Row>
    </div>
  );
}

export default DiscountSection;
