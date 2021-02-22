import SideNav from "../../components/common/side-nav/side-nav.component";
import styles from "./main.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <SideNav className={styles.sideNav} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
