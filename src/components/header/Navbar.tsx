import styles from '../../styled-components/navbar.module.css';
import { NavLink } from 'react-router-dom';
import Perfil from '../../assets/fotoperfiluser.jpg';

export const Navbar = () => {
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
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Experiencia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studies"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Educación
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Cursos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};