import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./images-list-item.module.css";

export default function Item({ title, description, imgUrl }) {
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        textAlign: "center",
        color: "black",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: 250 }}>
        {/* eslint-disable-next-line */}
        <img src={imgUrl} alt={title} className={styles.img} />
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
          {title}
        </Typography>
        <Typography paragraph sx={{ p: "0 16px 4rem 16px", textAlign: "left" }}>
          {description}
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
          {/* <Typography>10</Typography> */}
        </IconButton>
        {/* <Button
          variant="contained"
          href="https://google.com"
          target="_blank"
          rel="noopened noreferrer"
          sx={{ position: "absolute", bottom: "12px", right: "16px" }}
        >
          Help
        </Button> */}
      </Box>
    </Paper>
  );
}