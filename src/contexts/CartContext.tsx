import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { priceFormatter } from "../utils/priceFormatter";

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
  totalPriceFormatted: string
  addItem(input: AddItemInput): void
  removeItem(productId: string): number
  findProductById(productId: string): Item
  updateProductQuantity(productId: string, newValue: number): void
  createCheckoutUrl: () => Promise<string>
}

export const CartContext = createContext({} as CartContextData)

type CartProvider = {
  children: ReactNode
}

export function CartProvider({ children }: CartProvider) {
  const [items, setItems] = useState([] as Array<Item>)
  const itemsCount = items.length
  const totalPriceFormatted = priceFormatter(
    items.reduce((acc, { product, quantity }) => {
      acc += product.priceUnit * quantity
  
      return acc
    }, 0)
  )

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

  const createCheckoutUrl = async () => {
    try {
      const products = items.map(item => ({
        price_id: item.product.defaultPriceId,
        quantity: item.quantity
      }))
      const response = await axios.post('/api/create-checkout', { products })

      return response.data.checkout_url
    } catch (error) {
      
    }
  }

  return (
    <CartContext.Provider value={{
      items,
      itemsCount,
      totalPriceFormatted,
      addItem,
      removeItem,
      findProductById,
      updateProductQuantity,
      createCheckoutUrl,
    }}>
      {children}
    </CartContext.Provider>
  )
}
