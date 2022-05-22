import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImagesList from "../images-list/images-list";
import HelpList from "../help-list/help-list";

export default function List() {
  const [value, setValue] = useState(0);
  const isDesktop = useMediaQuery("(min-width:380px)");
  const orientation = isDesktop ? "horizontal" : "vertical";

  function onChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
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
            <Tab label="Forest Images" />
            <Tab label="Help the Forest" />
          </Tabs>
        </Box>
        {value === 0 ? <ImagesList /> : <HelpList />}
      </Box>
    </>
  );
}
