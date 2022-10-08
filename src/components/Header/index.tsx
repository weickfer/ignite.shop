
import Image from "next/future/image";
import { useState } from "react";
import logoImg from '../../assets/logo.svg'
import { useCart } from "../../hooks/useCart";
import { CartButton } from "../CartButton";
import { Drawer } from "../Drawer";

import { HeaderContainer, TotalCartCounter } from "./styles";

export function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const { itemsCount } = useCart()

  const handleOpenDrawer = () => setDrawerIsOpen(true)
  const handleCloseDrawer = () => setDrawerIsOpen(false)

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Shop" />

      <CartButton 
        variant="gray" 
        onClick={handleOpenDrawer} 
        disabled={itemsCount === 0}
      >
        { itemsCount > 0 && (
          <TotalCartCounter>
            <span>{itemsCount}</span>
          </TotalCartCounter>
        ) }
      </CartButton>

      <Drawer
        open={drawerIsOpen}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
      />
    </HeaderContainer>
  )
}