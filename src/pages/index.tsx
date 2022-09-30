import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'

import { HomeContainer, Product, ProductFooter } from '../styles/pages/home.styles'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter> 
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>
    </HomeContainer>
  )
}
