import type { AppProps } from "next/app";
import Image from 'next/future/image'

import logoImg from '../assets/logo.svg'

import { AppContainer, Header } from "../styles/pages/app.styles";
import "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <Image src={logoImg} alt="Shop" />
      </Header>

      <Component {...pageProps} />
    </AppContainer>
  )
}
