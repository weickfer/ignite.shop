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
  },
})

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

  '> div': {
    background: '$purple-green-gradient',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: `${102/16}rem`,
    height: `${92/16}rem`,

    img: {
      objectFit: 'cover',
    }
  }
})