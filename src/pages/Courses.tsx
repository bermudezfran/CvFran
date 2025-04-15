import styles from './styles/courses.module.css';

export const Courses = () => {
  return (
    <section className={styles.certifications}>
      <h1 className={styles.title}>Certificaciones</h1>

      <div className={styles.cert}>
        <h2 className={styles.company}>Fullstack Engineer</h2>
        <p>Sep 2024 – Presente</p>
        <p className={styles.description}>
          Programa enfocado en el desarrollo completo de aplicaciones web, cubriendo desde la creación de APIs con Node.js y bases de datos NoSQL, hasta el diseño de interfaces modernas con React. Incluye buenas prácticas, testing y despliegue en la nube.
        </p>
        <div className={styles.badges}>
          <span>React Js</span>
          <span>Node Js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className={styles.cert}>
        <h2 className={styles.company}>Desarrollo Frontend</h2>
        <p>Sep 2022 – Dic 2022</p>
        <p className={styles.description}>
          Curso intensivo de desarrollo frontend moderno, centrado en el uso de React y Next.js. Se abordan conceptos como componentes reutilizables, enrutamiento, consumo de APIs y estructura de proyectos escalables.
        </p>
        <div className={styles.badges}>
          <span>React Js</span>
          <span>Next Js</span>
        </div>
      </div>

      <div className={styles.cert}>
        <h2 className={styles.company}>Data Analytics</h2>
        <p>Dic 2021 – Abr 2022</p>
        <p className={styles.description}>
          Formación en análisis de datos aplicados a entornos empresariales. Incluye consultas avanzadas en SQL Server, generación de reportes y dashboards interactivos con Power BI para la toma de decisiones basada en datos.
        </p>
        <div className={styles.badges}>
          <span>SQL Server</span>
          <span>Power BI</span>
        </div>
      </div>
    </section>
  );
};