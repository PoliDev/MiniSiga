import type { AppProps } from 'next/app'
import { Footer } from '../Components/Footer/footer'
import { Header } from '../Components/Header/header'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>)
}

export default MyApp
