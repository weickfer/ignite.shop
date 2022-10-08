import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'green' | 'gray'
  children?: ReactNode
}

export function CartButton({ variant, children, ...props }: CartButtonProps) {
  return variant === 'green' ? (
    <ButtonContainer
      backgroundColor="green"
      size="medium"
      {...props}
    >
      {children}
      <Handbag weight="bold" color="#fff" size={32} />
    </ButtonContainer>
  ) : (
    <ButtonContainer
      backgroundColor="gray"
      size="small"
      {...props}
    >
      {children}
      <Handbag weight="bold" color="#8D8D99" size={24} />
    </ButtonContainer>
  )
}