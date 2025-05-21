import styles from "./styles/dashboard.module.css";
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {
  
  const { t } = useTranslation();

  return (
    <section className={styles.dashboard}>
      <h1 className={styles.title}> {t('dashboard.title')}</h1>
      <p className={styles.subtitle}>
        {t('dashboard.subtitle')}
      </p>
      

      <p className={styles.description}>
        {t('dashboard.descripcionOne')}
      </p>

      <p className={styles.description}>
      {t('dashboard.descripcionTwo')}
      </p>

      <p className={styles.description}>
        {t('dashboard.descripcionThree')}
      </p>
    </section>
  );
};
