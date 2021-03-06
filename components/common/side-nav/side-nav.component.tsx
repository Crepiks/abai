import { Fragment } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./side-nav.module.css";

export default function SideNav({ className, open = false, onOpen, onLeave }) {
  return (
    <Fragment>
      <nav
        onMouseLeave={onLeave}
        className={classNames(styles.sideNav, {
          [styles.sideNavOpen]: open,
        })}
      >
        <span className={styles.link}>
          <Link href="/">Главная</Link>
        </span>
        <span className={styles.link}>
          <Link href="/biography">Биография</Link>
        </span>
        <span className={styles.link}>
          <Link href="/contemporaries">Современники</Link>
        </span>
        <span className={styles.link}>
          <Link href="/works">Труды</Link>
        </span>
      </nav>
      <nav
        onMouseOver={onOpen}
        className={classNames(className, styles.openButton)}
      >
        <div className={styles.transparent} />
        <img
          src="/icons/chevron-right.svg"
          alt="Chevron Icon"
          className={styles.chevron}
        />
      </nav>
    </Fragment>
  );
}
