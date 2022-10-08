import { styled } from "../../styles/config"

export const DrawerContainer = styled('div', {
  width: `${480/16}rem`,
  backgroundColor: '$gray800',
  display: 'flex',
  flex: 1,

  position: 'relative',

  '> button': {
    position: 'absolute',
    top: `${28/16}rem`,
    right: `${28/16}rem`,
    backgroundColor: 'transparent',
    border: 0,
  }
})

export const DrawerMain = styled('main', {
  width: `${384/16}rem`,
  margin: `${72/16}rem auto 0`,

  h1: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$gray100'
  },

  ul: {
    marginTop: `2rem`,
    fontStyle: 'none',
    gap: `${24/16}rem`
  },
})

export const CartItem = styled('li', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1.25rem'
})

export const ImageContainer = styled('div', {
  background: '$purple-green-gradient',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: `${102/16}rem`,
  height: `${92/16}rem`,

  img: {
    objectFit: 'cover',
  },

  position: 'relative',
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray300',
  },

  span: {
    marginTop: '0.5rem',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100'
  },

  button: {
    marginTop: 'auto',
    background: 'transparent',
    border: 0,
    textAlign: 'left',
    
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ProductQuantityCount = styled('div', {
  position: 'absolute',
  top: 'calc(0px - (1.5rem / 2))',
  right: 'calc(0px - (1.5rem / 2))',
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
