import App from "next/app";
import Navbar from "./../components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/tailwind.css";

library.add(faBars);

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 h-screen flex flex-col text-gray-800 antialiased leading-tight">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
