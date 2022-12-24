import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug",
  image: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flex: "wrap", flexDirection: "row" }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image image="" className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title="Hola mundo" className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle title="Hola mundo" />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
