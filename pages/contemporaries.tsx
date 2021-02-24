import Head from "next/head";
import MainLayout from "../layouts/main/main.layout";
import ContemporaryCard from "../components/contemporaries/contemporary-card/contemporary-card.component";
import styles from "../styles/contemporaries.module.css";

export default function Contemporaries() {
  return (
    <div>
      <Head>
        <title>Абай | Современники</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className={styles.container}>
          <h1 className={styles.heading}>Современники</h1>
          <div className={styles.cards}>
            <ContemporaryCard />
            <ContemporaryCard />
            <ContemporaryCard />
            <ContemporaryCard />
            <ContemporaryCard />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
