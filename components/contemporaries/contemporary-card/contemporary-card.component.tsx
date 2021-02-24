import styles from "./contemporary-card.module.css";

export default function ContemporaryCard() {
  return (
    <article className={styles.container}>
      <img
        src="/images/contemporary.jpg"
        alt="Современник"
        className={styles.image}
      />
      <div>
        <span className={styles.years}>1894 - 1934</span>
        <span className={styles.name}>Бартольд Василий Владимирович</span>
        <p className={styles.description}>
          Российский и советский востоковед, тюрколог, арабист, исламовед,
          историк, архивист, филолог; один из основателей российской школы
          востоковедения.
        </p>
      </div>
    </article>
  );
}
