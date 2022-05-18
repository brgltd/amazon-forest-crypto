import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useTheme } from "@mui/material/styles";

function Item() {
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        textAlign: "center",
        color: "black",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: 250 }}>
        <Image src="/amazon-rainforest.jfif" layout="fill" alt="My Title" />
      </div>
      <Box sx={{ position: "relative" }}>
        <Typography
          component="h2"
          sx={{
            p: "0 16px",
            m: "16px 0",
            fontSize: "24px",
            fontWeight: 600,
            textAlign: "left",
          }}
        >
          My Title
        </Typography>
        <Typography paragraph sx={{ p: "0 16px 4rem 16px", textAlign: "left" }}>
          The Amazon rainforest, alternatively, the Amazon jungle, is a moist
          broadleaf tropical rainforest in the Amazon biome that covers most of
          the Amazon basin of South America
        </Typography>
        <IconButton
          aria-label="like"
          size="large"
          sx={{
            position: "absolute",
            bottom: "2px",
            left: "4px",
            color: "green",
          }}
        >
          <FavoriteIcon />
          <Typography>10</Typography>
        </IconButton>
        <Button
          variant="contained"
          href="https://google.com"
          target="_blank"
          rel="noopened noreferrer"
          sx={{ position: "absolute", bottom: "12px", right: "16px" }}
        >
          Help Link
        </Button>
      </Box>
    </Paper>
  );
}

function TabPanel({ value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`images-tab-${index}`}
      aria-labelledby={`images-tabpanel-${index}`}
    >
      {value === index && (
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
      )}
    </div>
  );
}

function getAriaProps(i) {
  return {
    id: `images-tab-${i}`,
    "aria-controls": `images-tabpanel-${i}`,
  };
}

export default function Home() {
  const [value, setValue] = useState(0);
  // const theme = useTheme();

  const isDesktop = useMediaQuery("(min-width:380px)");
  // const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const orientation = isDesktop ? "horizontal" : "vertical";

  function onChange(event, newValue) {
    setValue(newValue);
  }

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
      <div>
        <Box sx={{ margin: 4 }}>
          <Box>
            <Tabs
              value={value}
              onChange={onChange}
              aria-label="amazon images tabs"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ marginLeft: 3 }}
              orientation={orientation}
            >
              <Tab label="Recent" {...getAriaProps(0)} />
              <Tab label="This Week" {...getAriaProps(1)} />
              <Tab label="All Time" {...getAriaProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Recent
          </TabPanel>
          <TabPanel value={value} index={1}>
            This Week
          </TabPanel>
          <TabPanel value={value} index={2}>
            All Time
          </TabPanel>
        </Box>
      </div>
    </>
  );
}
