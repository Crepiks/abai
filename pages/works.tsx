import Head from "next/head";
import MainLayout from "../layouts/main/main.layout";
import WorkCard from "../components/works/work-card.component";
import styles from "../styles/works.module.css";

export default function Works() {
  return (
    <div>
      <Head>
        <title>Абай | Биография</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className={styles.container}>
          <h1 className={styles.heading}>Труды</h1>
          <div className={styles.cards}>
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
