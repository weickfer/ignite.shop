import { createContext, ReactNode, useState } from "react";

type Product = {
  id: string;
  defaultPriceId: string;
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  priceUnit: number
}

type Item = {
  product: Product
  quantity: number
}

type AddItemInput = { product: Product, quantity: number }

type CartContextData = {
  items: Item[]
  itemsCount: number
  addItem(input: AddItemInput): void
  removeItem(productId: string): number
  findProductById(productId: string): Item
  updateProductQuantity(productId: string, newValue: number): void
}

export const CartContext = createContext({} as CartContextData)

type CartProvider = {
  children: ReactNode
}

export function CartProvider({ children }: CartProvider) {
  const [items, setItems] = useState([] as Array<Item>)
  const itemsCount = items.length

  const addItem = ({ product, quantity }: AddItemInput) => {
    setItems(oldState => {
      return [...oldState, { product, quantity: quantity }]
    })
  }

  const removeItem = (productId: string): number => {
    const updatedItems = items.filter(item => item.product.id !== productId)
    setItems(updatedItems)

    return updatedItems.length
  }

  const findProductById = (productId: string) => {
    return items.find(item => item.product.id === productId)
  }

  const updateProductQuantity = (productId: string, newValue: number) => {
    const item = items.find(item => item.product.id === productId)

    const updatedItem: Item = {
      ...item,
      quantity: newValue,
    }

    setItems(oldState => oldState.map(item => {
      if (item.product.id === productId) {
        return updatedItem
      }

      return item
    }))
  }

  return (
    <CartContext.Provider value={{
      items,
      itemsCount,
      addItem,
      removeItem,
      findProductById,
      updateProductQuantity,
    }}>
      {children}
    </CartContext.Provider>
  )
}
