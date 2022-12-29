import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, handleChangeCounter } = useProduct({
    onChange,
    product,
    value,
  });
  return (
    <Provider value={{ counter, handleChangeCounter, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
