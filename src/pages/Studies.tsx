import styles from './styles/studies.module.css';

export const Studies = () => {
  return (
    <section className={styles.studies}>
      <h1 className={styles.title}>Educación</h1>

      <div className={styles.section}>
        <h2 className={styles.degree}>Ciencias de la Comunicación</h2>
        <p className={styles.institution}>Universidad / Instituto</p>
        <span className={styles.date}>Mar 2016 – Feb 2024</span>
      </div>

      <hr className={styles.divider} />

      <h1 className={styles.title}>Idiomas</h1>

      <ul className={styles.languageList}>
        <li>
          <strong>Español:</strong> Nativo
        </li>
        <li>
          <strong>Inglés:</strong> Nivel B1 (intermedio)
        </li>
      </ul>
    </section>
  );
};