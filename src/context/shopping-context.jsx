import { useState } from "react";
import { ShoppingContext } from "./useShopping";

export function ShoppingProvider({ children }) {
  const countInStorage = localStorage.getItem("count");
  const [count, setCount] = useState(
    countInStorage ? Number(countInStorage) : 0
  );

  function addProduct() {
    setCount((prev) => prev + 1);
    localStorage.setItem("count", count + 1);
  }

  return (
    <ShoppingContext.Provider value={{ count, addProduct }}>
      {children}
    </ShoppingContext.Provider>
  );
}
