import type { AppProps } from "next/app";

import { Header } from "../components/Header";
import { AppContainer } from "../styles/pages/app.styles";
import "../styles/global";
import { CartProvider } from "../contexts/CartContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <AppContainer>
        <Header />

        <Component {...pageProps} />
      </AppContainer>
    </CartProvider>
  )
}
