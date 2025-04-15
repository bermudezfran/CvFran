import { useTranslation } from 'react-i18next';
import styles from './styles/studies.module.css';

export const Studies = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.studies}>
      <h1 className={styles.title}>{t('studies.educationTitle')}</h1>

      <div className={styles.section}>
        <h2 className={styles.degree}>{t('studies.degree')}</h2>
        <p className={styles.institution}>{t('studies.institution')}</p>
        <span className={styles.date}>{t('studies.date')}</span>
      </div>

      <hr className={styles.divider} />

      <h1 className={styles.title}>{t('studies.languagesTitle')}</h1>

      <ul className={styles.languageList}>
        <li>
          <strong>{t('studies.spanish')}:</strong> {t('studies.native')}
        </li>
        <li>
          <strong>{t('studies.english')}:</strong> {t('studies.level')}
        </li>
      </ul>
    </section>
  );
};