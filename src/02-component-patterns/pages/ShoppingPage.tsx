import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

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
        <ProductCard product={product}>
          <ProductCard.Image image="" />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Hola mundo" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
