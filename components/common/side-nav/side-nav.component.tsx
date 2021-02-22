import styles from "./side-nav.module.css";

export default function SideNav({ className }) {
  return (
    <nav className={className + " " + styles.container}>
      <img
        src="/icons/chevron-right.svg"
        alt="Chevron Icon"
        className={styles.chevron}
      />
    </nav>
  );
}
