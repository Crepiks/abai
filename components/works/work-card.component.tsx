import styles from "./work-card.module.css";

export default function WorkCard() {
  return (
    <article className={styles.container}>
      <img
        src="/images/work.jpg"
        alt="Современник"
        className={styles.image}
      />
      <div>
        <span className={styles.years}>Год издания: 1934 г</span>
        <span className={styles.name}>История Казахской ССР</span>
        <p className={styles.description}>
          Российский и советский востоковед, тюрколог, арабист, исламовед,
          историк, архивист, филолог; один из основателей российской школы
          востоковедения.
        </p>
      </div>
    </article>
  );
}
