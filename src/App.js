import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import data from './data';
import './App.css';

function App() {
  const [addProducts, setAddProducts] = useState([]);

  const handleProduct = (product) => {
    const exist = addProducts.find(
      (item) => item.productCode === product.productCode
    );
    if (exist) {
      setAddProducts(
        addProducts.map((item) =>
          exist === item ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setAddProducts((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const exist = addProducts.find(
      (x) => x.productCode === product.productCode
    );

    if (exist.quantity > 1) {
      setAddProducts(
        addProducts.map((item) =>
          item.productCode === exist.productCode
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setAddProducts(
        addProducts.filter((item) => item.productCode !== product.productCode)
      );
    }
  };

  const calculateProducts = () => {
    const calArr = addProducts.map((product) => {
      const { price, quantity, productCode } = product;
      if (productCode === 'fm1') {
        const subTotal = price * quantity;
        const discount = quantity % 2 === 1 ? (quantity - 1) / 2 : quantity / 2;
        const totalPrice =
          quantity % 2 === 1
            ? price * quantity - discount
            : price * quantity - discount;

        return { ...product, totalPrice, discount, subTotal };
      } else if (productCode === 'tp1') {
        const subTotal = price * quantity;
        const discount =
          quantity < 6 ? 0 : price * ((quantity - (quantity % 6)) / 6);
        const totalPrice =
          quantity < 6 ? price * quantity : price * quantity - discount;

        return { ...product, totalPrice, discount, subTotal };
      } else if (productCode === 'hs1') {
        const stanizerPirce = price * 0.175 * quantity;
        const totalPrice = parseFloat(stanizerPirce.toFixed(2));
        const subTotal = totalPrice;
        const discount = 0;
        return { ...product, totalPrice, discount, subTotal };
      } else {
        return 'Product non Found';
      }
    });
    return calArr;
  };
  const soldProducts = calculateProducts();
  //console.log(calculateProducts());
  return (
    <>
      <Header />
      <Main
        addProducts={addProducts}
        products={data.products}
        handleProduct={handleProduct}
        removeProduct={removeProduct}
        soldProducts={soldProducts}
      />
    </>
  );
}

export default App;
