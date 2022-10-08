import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    console.warn(`useCart must be provided by CartProvider!`)
  }

  return context
}