import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from "../styles/global";
import { useStore } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
  <>
  <GlobalStyles />
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </>
  )
}

export default MyApp
