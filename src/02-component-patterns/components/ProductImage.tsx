import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ image, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imageToShow = "";
  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt="Product"
      style={style}
    />
  );
};
