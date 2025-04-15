import { useTranslation } from 'react-i18next';
import styles from './styles/courses.module.css';

export const Courses = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.certifications}>
      <h1 className={styles.title}>{t('courses.title')}</h1>

      {/* Fullstack */}
      <div className={styles.cert}>
        <h2 className={styles.company}>Fullstack Engineer</h2>
        <p className={styles.institution}>Educación IT</p>
        <p>{t('courses.fullstack.date')}</p>
        <p className={styles.description}>{t('courses.fullstack.description')}</p>
        <div className={styles.badges}>
          <span>React Js</span>
          <span>Node Js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
        </div>
      </div>

      {/* Frontend */}
      <div className={styles.cert}>
        <h2 className={styles.company}>Desarrollo Frontend</h2>
        <p className={styles.institution}>Udemy</p>
        <p>{t('courses.frontend.date')}</p>
        <p className={styles.description}>{t('courses.frontend.description')}</p>
        <div className={styles.badges}>
          <span>React Js</span>
          <span>Next Js</span>
        </div>
      </div>

      {/* Analytics */}
      <div className={styles.cert}>
        <h2 className={styles.company}>Data Analytics</h2>
        <p className={styles.institution}>Coderhouse</p>
        <p>{t('courses.analytics.date')}</p>
        <p className={styles.description}>{t('courses.analytics.description')}</p>
        <div className={styles.badges}>
          <span>SQL Server</span>
          <span>Power BI</span>
        </div>
      </div>
    </section>
  );
};