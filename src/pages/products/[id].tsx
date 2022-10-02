import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ProductContainer, ImageContainer, ProductDetails, BuyButton } from "../../styles/pages/products.styles"
import { priceFormatter } from "../../utils/priceFormatter"

type Product = {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}

type ProductProps = {
  product: Product
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 72,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cum ipsum in eaque blanditiis nam beatae fugiat repellat placeat architecto! Facere ex a, velit fugiat rem itaque corporis reprehenderit nisi.</p>

        <BuyButton>
          Comprar agora
        </BuyButton>
      </ProductDetails>
    </ProductContainer>
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
        imageUrl: product.images[0],
        name: product.name,
        price: priceFormatter(price.unit_amount / 100),
        description: product.description,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
