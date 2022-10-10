import { styled } from "../config";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ProductsImagesContainer = styled('section', {
  position: 'relative',
  width: '100%',
  height: 200,

  div: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  

  variants: {
    position: {
      // haveOne: {},
      haveTwo: {
        transform: 'translateX(calc(0px - 45px))',

        'div:last-child': {
          marginLeft: 90,
        },
      },
      haveThree: {
        'div:first-child': {
          left: '35%',
        },
        'div:last-child': {
          marginLeft: 90,
        },
      },
    }
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: 140,
  maxHeight: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 70,
  // padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover',
  }
});

export const HaveMoreItems = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: 140,
  maxHeight: 140,
  borderRadius: 70,
  backgroundColor: '$gray800',
  border: '3px solid $gray900',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
  },
})