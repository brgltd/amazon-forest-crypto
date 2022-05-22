import Link from "next/link";
import Button from "@mui/material/Button";

export default function Topbar() {
  return (
    <Link href="/upload" passHref>
      <Button variant="contained" color="info" as="a" size="large">
        UPLOAD IMAGE
      </Button>
    </Link>
  );
}
