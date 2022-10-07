import type { AppProps } from "next/app";
import { CartProvider } from 'use-shopping-cart'

import { Header } from "../components/Header";
import { providerConfig } from "../lib/stripe";
import { AppContainer } from "../styles/pages/app.styles";
import "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <CartProvider {...providerConfig} >
        <Header />

        <Component {...pageProps} />
      </CartProvider>
    </AppContainer>
  )
}
