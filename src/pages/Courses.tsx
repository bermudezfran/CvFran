import styles from './styles/courses.module.css';

export const Courses = () => {
  return (
    <section className={styles.certifications}>
      <h1 className={styles.title}>Certificaciones</h1>

      <div className={styles.cert}>
        <h2>Fullstack Engineer</h2>
        <p>Sep 2024 – Presente</p>
        <div className={styles.badges}>
          <span>React Js</span>
          <span>Node Js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className={styles.cert}>
        <h2>Desarrollo Frontend</h2>
        <p>Sep 2022 – Dic 2022</p>
        <div className={styles.badges}>
          <span>React Js</span>
          <span>Next Js</span>
        </div>
      </div>

      <div className={styles.cert}>
        <h2>Data Analytics</h2>
        <p>Dic 2021 – Abr 2022</p>
        <div className={styles.badges}>
          <span>SQL Server</span>
          <span>Power BI</span>
        </div>
      </div>
    </section>
  );
};