import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import { useState } from "react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../../lib/stripe"
import { ProductContainer, ImageContainer, ProductDetails, BuyButton } from "../../styles/pages/products.styles"
import { priceFormatter } from "../../utils/priceFormatter"

type Product = {
  id: string;
  defaultPriceId: string;
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  priceUnit: number
}

type ProductProps = {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { addItem } = useShoppingCart()

  const handleAddProductToCart = async () => {
    const productToCart = {
      id: product.id,
      name: product.name,
      price_id: product.defaultPriceId,
      price: product.priceUnit,
      currency: 'BRL',
      image: product.imageUrl,
    }

    addItem(productToCart, { count: 1 })
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <BuyButton disabled={isCreatingCheckoutSession} onClick={handleAddProductToCart}>
            Adicionar ao carrinho
          </BuyButton>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

type CustomGetStaticProps = GetStaticProps<{ product: Product }, { id: string }>

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await stripe.products.list({
    limit: 5,
  })
  const paths = products.data.map(product => ({
    params: { id: product.id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: CustomGetStaticProps = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        defaultPriceId: price.id,
        imageUrl: product.images[0],
        name: product.name,
        price: priceFormatter(price.unit_amount / 100),
        priceUnit: price.unit_amount / 100,
        description: product.description,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
