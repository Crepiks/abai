import styles from "./event-card.module.css";

export default function EventCard({
  className = "",
  years,
  title,
  description,
}) {
  return (
    <article className={className}>
      <span className={styles.subheading}>{years}</span>
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
