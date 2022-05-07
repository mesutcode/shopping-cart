import { Col, Row } from 'react-bootstrap';
function PrintSection(props) {
  const { soldProducts } = props;
  const printProducts = soldProducts.map((product) => {
    const { quantity } = product;
    let printProduct = [];

    for (let i = 0; i < quantity; i++) {
      printProduct.push(product);
    }

    return printProduct.map((item, i) => {
      const { name, price, productCode, quantity, totalPrice } = item;
      return (
        <Row
          className="bg-warning justify-content-md-center"
          key={i * totalPrice}
        >
          <Col xs={3} className="bg-dark text-warning">
            {name}
          </Col>
          <Col xs={1} className="bg-dark text-warning">
            {productCode === 'hs1' ? totalPrice / quantity : price}
          </Col>
        </Row>
      );
    });
  });

  return <section>{printProducts}</section>;
}

export default PrintSection;
