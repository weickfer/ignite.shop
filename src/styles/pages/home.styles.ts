import { styled } from "../config";

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  // minHeight: '40rem',
  minHeight: 'calc(100vh - 9rem)',
})

export const Product = styled('a', {
  background: '$purple-green-gradient',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})

export const ProductFooter = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.25rem',
  cursor: 'default',
  zIndex: 999,

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  div: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

    strong: {
      fontSize: '$lg'
    },
  
    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },
  },

  // button: {
  //   border: 0,
  //   width: '3.5rem',
  //   height: '3.5rem',
  //   borderRadius: 6,

  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '$green500',

  //   '&:hover': {
  //     backgroundColor: '$green300',
  //   },
  // },
})
