import Link from "next/link";
import Button from "@mui/material/Button";
import Logo from "../logo/logo";
import styles from "./topbar.module.css";

export default function Topbar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.upload}>
          <Link href="/upload" passHref>
            <Button variant="contained" color="info" as="a" size="large">
              UPLOAD IMAGE
            </Button>
          </Link>
        </li>
        <li className={styles.logoItem}>
          <span className={styles.msg}>Powered by</span>
          <div className={styles.logo}>
            <a
              href="https://ipfs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
