import { useState } from "react";
import Head from "next/head";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`images-tab-${index}`}
      aria-labelledby={`images-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 1, m: 3, borderTop: 1, borderColor: "divider" }}>
          <Typography>{children}</Typography>
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
