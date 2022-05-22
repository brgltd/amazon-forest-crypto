import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "../images-list-item/images-list-item";

export default function ImagesList({ value, index }) {
  return (
    <div>
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
