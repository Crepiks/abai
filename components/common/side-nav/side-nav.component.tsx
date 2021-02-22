import Link from "next/link";
import styles from "./side-nav.module.css";

export default function SideNav({ className, open = false }) {
  if (open) {
    return (
      <nav className={className + " " + styles.openContainer}>
        <span className={styles.link}>
          <Link href="/">Главная</Link>
        </span>
        <span className={styles.link}>
          <Link href="/">Биография</Link>
        </span>
        <span className={styles.link}>
          <Link href="/">Современники</Link>
        </span>
        <span className={styles.link}>
          <Link href="/">Труды</Link>
        </span>
        <span className={styles.link}>
          <Link href="/">Литература</Link>
        </span>
        <span className={styles.link}>
          <Link href="/">Письма</Link>
        </span>
      </nav>
    );
  } else {
    return (
      <nav className={className + " " + styles.closedContainer}>
        <img
          src="/icons/chevron-right.svg"
          alt="Chevron Icon"
          className={styles.chevron}
        />
      </nav>
    );
  }
}
