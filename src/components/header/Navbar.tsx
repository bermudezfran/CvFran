import styles from '../../styled-components/navbar.module.css';
import { NavLink } from 'react-router-dom';
import Perfil from '../../assets/fotoperfiluser.jpg';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.profile}>
        <img
          src={Perfil}
          alt="Foto de perfil de Francisco"
          className={styles.avatar}
        />
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>Francisco Bermudez</h1>
          <p className={styles.role}>Frontend Developer</p>
        </div>
      </div>

      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {t('navbar.about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {t('navbar.experience')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studies"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {t('navbar.studies')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {t('navbar.courses')}
            </NavLink>
          </li>

          <li>
            <button onClick={toggleLanguage} className={styles.langBtn}>
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};