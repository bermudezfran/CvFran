import styles from "./styles/experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.experience}>
      <h1 className={styles.title}>Experiencia Profesional</h1>

      <div className={styles.job}>
        <h2 className={styles.company}>Maxdream</h2>
        <p className={styles.role}>Desarrollador Frontend</p>
        <span className={styles.date}>Septiembre 2023 – Presente</span>
        <ul className={styles.list}>
          <li>Desarrollando un sitio web con Next.js, Typescript y Tailwind CSS.</li>
          <li>Desarrollando la aplicación móvil con React Native y Tailwind CSS.</li>
          <li>Aplicando buenas prácticas y optimización de componentes para mayor escalabilidad.</li>
          <li>Construyendo interfaces gráficas desde diseños en Figma.</li>
        </ul>
        <div className={styles.techs}>
          <span>React</span>
          <span>Next.js</span>
          <span>Typescript</span>
          <span>Tailwind</span>
          <span>Figma</span>
        </div>
      </div>

      <div className={styles.job}>
        <h2 className={styles.company}>Sistema Apple MLM</h2>
        <p className={styles.role}>Desarrollador Frontend (freelance)</p>
        <span className={styles.date}>Marzo 2023 – Febrero 2025 </span>
        <ul className={styles.list}>
          <li>Migrando la plataforma hacia React.js utilizando Typescript y Bootstrap.</li>
          <li>Aplicando buenas prácticas y optimización de componentes para mayor escalabilidad.</li>
          <li>Diseñando interfaces gráficas a partir de diseños implementados en Figma.</li>
        </ul>
        <div className={styles.techs}>
          <span>React</span>
          <span>Typescript</span>
          <span>Bootstrap</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};