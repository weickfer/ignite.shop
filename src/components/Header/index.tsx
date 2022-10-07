import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import logoImg from '../../assets/logo.svg'
import { CartButton } from "../CartButton";

import { CartItem, DrawerContainer, DrawerMain, HeaderContainer } from "./styles";

export function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const { handleCloseCart } = useShoppingCart()

  const handleOpenDrawer = () => setDrawerIsOpen(true)
  const handleCloseDrawer = () => setDrawerIsOpen(false)

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Shop" />

      <CartButton variant="gray" onClick={handleOpenDrawer} />

      <SwipeableDrawer 
        anchor="right"
        open={drawerIsOpen}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        
      >
        <DrawerContainer>
          <button onClick={handleCloseDrawer}>
            <X weight="bold" size={24} color="#8D8D99" />
          </button>

          <DrawerMain>
            <h1>Sacola de compras</h1>

            <ul>
              <CartItem>
                <div>
                  {/* <Image width={94} height={94} /> */}
                </div>
              </CartItem>
            </ul>
          </DrawerMain>
        </DrawerContainer>
      </SwipeableDrawer>
    </HeaderContainer>
  )
}