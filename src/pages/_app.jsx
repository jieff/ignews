import { Header } from '../components/Header';

import styles from '../styles/global.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
