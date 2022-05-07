import React from 'react';

import DiscountSection from './DiscountSection';
import PrintSection from './PrintSection';

function Receipt(props) {
  const { soldProducts } = props;
  return (
    <section>
      <PrintSection soldProducts={soldProducts} />
      <DiscountSection soldProducts={soldProducts} />
    </section>
  );
}

export default Receipt;
