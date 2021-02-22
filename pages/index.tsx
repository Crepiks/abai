import Head from "next/head";
import MainLayout from "../layouts/main/main.layout";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Абай</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className={styles.container}>
          <h1 className={styles.heading}>Abai</h1>
        </div>
      </MainLayout>
    </div>
  );
}
