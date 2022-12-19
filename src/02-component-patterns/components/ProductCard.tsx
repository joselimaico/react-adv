import { createContext } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Props } from "../interfaces/interfaces";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
  const { counter, handleChangeCounter } = useProduct();
  return (
    <Provider value={{ counter, handleChangeCounter, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
