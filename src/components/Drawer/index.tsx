import SwipeableDrawer, { SwipeableDrawerProps } from "@mui/material/SwipeableDrawer";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { CartItem, Details, DrawerContainer, DrawerFooter, DrawerMain, DrawerSection, ImageContainer, ProductQuantityCount } from "./styles";

type DrawerProps = {} & SwipeableDrawerProps

export function Drawer(props: DrawerProps) {
  const cart = useCart()
  const { items, itemsCount, totalPriceFormatted } = cart

  const removeItem = (productId: string) => {
    const itemsCount = cart.removeItem(productId)

    if (itemsCount === 0) { // Close Drawer when cart is empty
      props.onClose(undefined)
    }
  }

  const handleFinalizePurchase = async () => {
    const checkoutUrl = await cart.createCheckoutUrl()

    window.location.href = checkoutUrl
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

        <DrawerFooter>
          <div>
            <DrawerSection>
              <p>Quantidade</p>
              <p>{itemsCount} itens</p>
            </DrawerSection>
            <DrawerSection>
              <span>Valor total</span>
              <span>{totalPriceFormatted}</span>
            </DrawerSection>
          </div>

          <button type="button" onClick={handleFinalizePurchase}>
            Finalizar compra
          </button>
        </DrawerFooter>
      </DrawerContainer>
    </SwipeableDrawer>
  )
}