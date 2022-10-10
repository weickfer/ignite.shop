import { height } from "@mui/system";
import { styled } from "../../styles/config";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  button: {
    cursor: 'pointer',
    // position: 'relative',
  },

  a: {
    cursor: 'pointer'
  }
})

export const TotalCartCounter = styled('div', {
  position: 'absolute',
  top: 'calc(0px - (1.5rem / 2))',
  left: 'calc(0px - (1.5rem / 2))',
  width: '1.5rem',
  height: '1.5rem',
  background: '$green500',
  border: '3px solid $gray800',
  borderRadius: 12,
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    color: '$white',
    fontSize: `${14/16}rem`,
    fontWeight: 'bold'
  }
})