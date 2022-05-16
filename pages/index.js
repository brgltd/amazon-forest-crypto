import Head from "next/head";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon forest crypto</title>
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
      <div>
        <Button variant="contained">Homepage</Button>
      </div>
    </>
  );
}
