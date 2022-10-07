import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'green' | 'gray'
}

export function CartButton({ variant, ...props }: CartButtonProps) {
  return variant === 'green' ? (
    <ButtonContainer
      backgroundColor="green"
      size="medium"
      {...props}
    >
      <Handbag weight="bold" color="#fff" size={32} />
    </ButtonContainer>
  ) : (
    <ButtonContainer
      backgroundColor="gray"
      size="small"
      {...props}
    >
      <Handbag weight="bold" color="#8D8D99" size={24} />
    </ButtonContainer>
  )
}