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
          <div className={styles.content}>
            <h1 className={styles.heading}>Abai</h1>
            <p className={styles.description}>
              Абай Кунанба́ев — казахский поэт, композитор, просветитель,
              мыслитель, общественный деятель, основоположник казахской
              письменной литературы и её первый классик, реформатор культуры в
              духе сближения с европейской культурой на основе просвещённого
              ислама.
            </p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
