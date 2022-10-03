import type { GetStaticProps } from 'next'
import Image from 'next/future/image'
import type Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product, ProductFooter } from '../styles/pages/home.styles'
import { stripe } from '../lib/stripe'
import Link from 'next/link'
import { priceFormatter } from '../utils/priceFormatter'
import Head from 'next/head'

type HomeProps = {
  products: Array<{
    id: string
    name: string
    imageUrl: string
    price: string
  }>
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <ProductFooter>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </ProductFooter>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatter(price.unit_amount / 100),
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
