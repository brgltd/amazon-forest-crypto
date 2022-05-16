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
// import { useTheme } from "@mui/material/styles";

function Item() {
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        padding: 1,
        textAlign: "center",
        color: "black",
        height: "300px",
      }}
    >
      <div style={{ position: "relative", width: 100, height: 100 }}>
        <Image
          height={100}
          width={100}
          src="/amazon-rainforest.jfif"
          layout="fill"
          alt="My Title"
        />
      </div>
      <Typography component="h2" sx={{ fontSize: 24, fontWeight: 600 }}>
        My Title
      </Typography>
      <Typography paragraph sx={{ p: 2, textAlign: "left" }}>
        The Amazon rainforest, alternatively, the Amazon jungle, is a moist
        broadleaf tropical rainforest in the Amazon biome that covers most of
        the Amazon basin of South America
      </Typography>
    </Paper>
  );
}

function TabPanel({ children, value, index }) {
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
        <div style={{ margin: "32px" }}>
          <Box>
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
      </div>
    </>
  );
}
