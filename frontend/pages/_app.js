import Topbar from "../components/topbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
