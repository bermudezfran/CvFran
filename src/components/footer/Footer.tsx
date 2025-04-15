import styles from "../../styled-components/footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Francisco Bermudez. Todos los derechos
        reservados.
      </p>

      <div className={styles.socials}>
        <Link to="https://www.linkedin.com/in/franbermudez1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link to="https://github.com/bermudezfran" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="mailto:franciscog.bermudez@outlook.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </Link>
      </div>
    </footer>
  );
};
