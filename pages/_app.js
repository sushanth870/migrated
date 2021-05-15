import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from "../styles/global";


function MyApp({ Component, pageProps }) {
  return (
  <>
  <GlobalStyles />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
