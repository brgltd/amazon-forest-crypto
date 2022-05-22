import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Item from "../images-list-item/images-list-item";

export default function ImagesList() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/assets");
        const data = res.data;
        // const ipnft =
        //   "bafyreigm6r62zinetirlqiiqeavibdotcwu3slgwualhljbkwvfhhmgbki";
        // const metadataUrl = `https://${ipnft}.ipfs.dweb.link/metadata.json`;
        // const metadata = await axios.get(metadataUrl);
        // const img = metadata.data.image;
        // const imgUrl = `https://${img
        //   .replace("ipfs://", "")
        //   .replace("/", ".ipfs.dweb.link/")}`;
        const newData = await Promise.all(
          data.map(async (item) => {
            console.log("item");
            console.log(item);
            const ipnft = item?.cid;
            console.log(ipnft);
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
        console.log(newData);
        setLoading(false);
        setAssets(newData);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, []);

  return (
    <Box sx={{ paddingTop: 3, m: 3, borderTop: 1, borderColor: "divider" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
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
  return (
    <Box sx={{ paddingTop: 3, m: 3, borderTop: 1, borderColor: "divider" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ paddingTop: 3, m: 3, borderTop: 1, borderColor: "divider" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
