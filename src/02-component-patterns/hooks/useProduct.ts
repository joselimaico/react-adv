import { useState, useEffect, useRef } from "react";
import { onChangeArgs, Product, InitialValues } from "../interfaces/interfaces";
interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const handleChangeCounter = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount)
      newValue = Math.min(newValue, initialValues?.maxCount!);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    handleChangeCounter,
    reset,
    isMaxCountReached: initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
  };
};
