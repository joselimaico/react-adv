import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[1];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>reset</button>
            {count > 0 && <button onClick={() => increaseBy(-2)}>-2</button>}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
