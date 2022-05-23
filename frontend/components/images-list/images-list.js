import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Item from "../images-list-item/images-list-item";
import { staticData } from "./static";

export default function ImagesList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/assets");
        const data = res.data;
        const newData = await Promise.all(
          data.map(async (item) => {
            const ipnft = item?.cid;
            if (ipnft) {
              const metadataUrl = `https://${ipnft}.ipfs.dweb.link/metadata.json`;
              const metadata = await axios.get(metadataUrl);
              const img = metadata.data.image;
              const imgUrl = `https://${img
                .replace("ipfs://", "")
                .replace("/", ".ipfs.dweb.link/")}`;
              return { ...item, imgUrl };
            }
            return { ...item, imgUrl: null };
          })
        );
        setAssets(newData);
      } catch (error) {
        console.error("error fetching data");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box sx={{ paddingTop: 3, m: 3, borderTop: 1, borderColor: "divider" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/*Static data with images from the forest*/}
          {staticData.map(
            ({ title, description, imgUrl, date, filename }, index) => (
              <Grid item sx={12} md={6} lg={4} key={index}>
                <Item
                  title={title}
                  description={description}
                  imgUrl={imgUrl}
                  date={date}
                  filename={filename}
                />
              </Grid>
            )
          )}
          {/* Real world data coming from IPFS */}
          {assets.map(
            ({ title, description, imgUrl, date, filename }, index) => (
              <Grid item sx={12} md={6} lg={4} key={index}>
                <Item
                  title={title}
                  description={description}
                  imgUrl={imgUrl}
                  date={date}
                  filename={filename}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
}
