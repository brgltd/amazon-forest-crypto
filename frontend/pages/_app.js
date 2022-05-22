import Head from "next/head";
import Topbar from "../components/topbar/topbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amazon Forest Crypto</title>
        <meta
          name="description"
          content="Create NFTs from your favorite Amazon photos and help save the forest"
        />
        <meta
          name="keywords"
          content="Amazon Forest, NFTs, WEB3, IPFS, Filecoin, Decentralization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
