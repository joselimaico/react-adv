import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";
interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
}
export const useProduct = ({ product, onChange }: useProductArgs) => {
  const [counter, setCounter] = useState(0);
  const handleChangeCounter = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    handleChangeCounter,
  };
};
