import Link from "next/link";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Logo from "../logo/logo";
import styles from "./topbar.module.css";

function isHome(str) {
  return str === "/";
}

export default function Topbar() {
  const { pathname } = useRouter();
  const href = isHome(pathname) ? "/upload" : "/";
  const cta = isHome(pathname) ? "Upload Image" : "Homepage";

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.upload}>
          <Link href={href} passHref>
            <Button variant="contained" color="info" as="a" size="large">
              {cta}
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
