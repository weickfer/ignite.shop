import SwipeableDrawer, { SwipeableDrawerProps } from "@mui/material/SwipeableDrawer";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { CartItem, Details, DrawerContainer, DrawerMain, ImageContainer, ProductQuantityCount } from "./styles";

type DrawerProps = {} & SwipeableDrawerProps

export function Drawer(props: DrawerProps) {
  const cart = useCart()
  const { items } = cart

  const removeItem = (productId: string) => {
    const itemsCount = cart.removeItem(productId)

    if (itemsCount === 0) {
      props.onClose(undefined)
    }
  }

  return (
    <SwipeableDrawer
      anchor="right"
      {...props}
    >
      <DrawerContainer>
        <button onClick={props.onClose}>
          <X weight="bold" size={24} color="#8D8D99" />
        </button>

        <DrawerMain>
          <h1>Sacola de compras</h1>

          <ul>
            {
              items.map(({ product, quantity }) => (
                <CartItem key={product.id}>
                  <ImageContainer>
                    {quantity > 1 && (
                      <ProductQuantityCount>
                        <span>{quantity}</span>
                      </ProductQuantityCount>
                    )}
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={94}
                      height={94}
                    />
                  </ImageContainer>

                  <Details>
                    <p>{product.name}</p>
                    <span>{product.price}</span>

                    <button type="button" onClick={() => removeItem(product.id)}>Remover</button>
                  </Details>
                </CartItem>
              ))
            }
          </ul>
        </DrawerMain>
      </DrawerContainer>
    </SwipeableDrawer>
  )
}