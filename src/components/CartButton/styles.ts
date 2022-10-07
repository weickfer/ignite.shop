import { styled } from "../../styles/config";

export const ButtonContainer = styled('button', {
  border: 0,
  borderRadius: 6,
  // cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      small: {
        width: '3rem',
        height: '3rem'
      },
      medium: {
        width: '3.5rem',
        height: '3.5rem',
      },
    },
    backgroundColor: {
      green: {
        backgroundColor: '$green500',
      },
      gray: {
        backgroundColor: '$gray800',
      },
    }
  },
})