import { createContext, useContext } from "react";

export const ShoppingContext = createContext({
  count: 0,
  addProduct: () => null,
});

export function useShoppingContext() {
  const context = useContext(ShoppingContext);
  if (!context) throw new Error("No se encontro el shopping context");
  return context;
}
