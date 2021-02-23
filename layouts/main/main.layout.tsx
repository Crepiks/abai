import { useState } from "react";
import SideNav from "../../components/common/side-nav/side-nav.component";
import styles from "./main.module.css";

export default function MainLayout({ children }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <div className={styles.container}>
      <SideNav
        open={sideNavOpen}
        onOpen={() => setSideNavOpen(true)}
        onLeave={() => setSideNavOpen(false)}
        className={styles.sideNav}
      />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
