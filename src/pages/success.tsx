import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { HaveMoreItems, ImageContainer, ProductsImagesContainer, SuccessContainer } from "../styles/pages/success.styles";

type SuccessProps = {
  customerName: string
  products: Array<{
    name: string
    imageUrl: string
  }>
}

export default function Success({ customerName, products }: SuccessProps) {
  const product = products[0]
  const positionMode = 
    products.length === 1 
    ? null 
    : products.length === 2
    ? 'haveTwo'
    : products.length >= 3
    ? 'haveThree'
    : null
    

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>

        <ProductsImagesContainer position={positionMode}>
          {
            products.map(product => (
              <ImageContainer key={product.imageUrl}>
                <Image src={product.imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
            ))
          }
          {
            products.length > 3 && (
              <HaveMoreItems>
                <span>+ {products.length - 2}</span>
              </HaveMoreItems>
            )
          }
        </ProductsImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map(lineItem => {
    const { name, images } = lineItem.price.product as Stripe.Product

    return { name, imageUrl: images[0] }
  })

  return {
    props: {
      customerName,
      products,
    }
  }
}