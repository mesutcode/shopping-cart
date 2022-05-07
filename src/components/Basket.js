import React from 'react';
import { Table, Button } from 'react-bootstrap';

function Basket(props) {
  const { addProducts, handleProduct, removeProduct } = props;
  const renderTable = addProducts.map((product) => (
    <tr key={product.productCode}>
      <td>{product.name}</td>
      <td>
        {product.price}x{product.quantity}
      </td>
      <td>
        <Button variant="success" onClick={() => handleProduct(product)}>
          +
        </Button>
        <Button variant="warning" onClick={() => removeProduct(product)}>
          -
        </Button>
      </td>
    </tr>
  ));
  return (
    <section className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price*quantity</th>
            <th>Add/Remove</th>
          </tr>
        </thead>
        <tbody>{renderTable}</tbody>
      </Table>
    </section>
  );
}

export default Basket;
