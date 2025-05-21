import { useTranslation } from "react-i18next";
import styles from "./styles/experience.module.css";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.experience}>
      <h1 className={styles.title}>{t('experience.title')}</h1>

      <div className={styles.job}>
        <h2 className={styles.company}>Maxdream</h2>
        <p className={styles.role}>{t('experience.puesto')}</p>
        <span className={styles.date}>{t('experience.maxdream.fecha')}</span>
        <ul className={styles.list}>
          <li>{t('experience.maxdream.tareas.0')}</li>
          <li>{t('experience.maxdream.tareas.1')}</li>
          <li>{t('experience.maxdream.tareas.2')}</li>
          <li>{t('experience.maxdream.tareas.3')}</li>
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
        <p className={styles.role}>{t('experience.puesto')} (freelance)</p>
        <span className={styles.date}>{t('experience.mlm.fecha')}</span>
        <ul className={styles.list}>
          <li>{t('experience.mlm.tareas.0')}</li>
          <li>{t('experience.mlm.tareas.1')}</li>
          <li>{t('experience.mlm.tareas.2')}</li>
        </ul>
        <div className={styles.techs}>
          <span>React</span>
          <span>Typescript</span>
          <span>Bootstrap</span>
          <span>Figma</span>
        </div>
      </div>

      <div className={styles.job}>
        <h2 className={styles.company}>BB Media</h2>
        <p className={styles.role}>{t('experience.puesto2')}</p>
        <span className={styles.date}>{t('experience.bb.fecha')}</span>
        <ul className={styles.list}>
          <li>{t('experience.bb.tareas.0')}</li>
          <li>{t('experience.bb.tareas.1')}</li>
          <li>{t('experience.bb.tareas.2')}</li>
        </ul>
        <div className={styles.techs}>
          <span>Excel</span>
          <span>SQL</span>
          <span>Power BI</span>
        </div>
      </div>
    </section>
  );
};