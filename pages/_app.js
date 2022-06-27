import "../styles/globals.scss";
// import { wrapper } from '../store/store';
const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default WrappedApp;
