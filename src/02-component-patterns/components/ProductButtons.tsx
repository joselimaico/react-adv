import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { counter, handleChangeCounter } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleChangeCounter(-1)}
      >
        {" "}
        -{" "}
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={styles.buttonAdd}
        onClick={() => handleChangeCounter(1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
