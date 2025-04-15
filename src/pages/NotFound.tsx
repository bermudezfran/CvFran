import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles/notfound.module.css';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>{t('notFound.message')}</p>
      <Link to="/" className={styles.button}>
        {t('notFound.button')}
      </Link>
    </section>
  );
};