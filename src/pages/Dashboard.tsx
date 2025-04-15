import styles from "./styles/dashboard.module.css";

export const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <h1 className={styles.title}>¡Hola! Soy Francisco Bermudez 👋</h1>
      <p className={styles.subtitle}>
        Frontend Developer & Mobile App Enthusiast
      </p>

      <p className={styles.description}>
        Estoy desarrollando mi carrera profesional en el mundo de la
        programación frontend y el desarrollo de aplicaciones móviles. Gracias a
        mi formación en comunicación, tengo una perspectiva única para diseñar
        interfaces que no solo se ven bien, sino que realmente conectan con el
        usuario.
      </p>

      <p className={styles.description}>
        Tengo experiencia en tecnologías como <strong>HTML</strong>,{" "}
        <strong>CSS</strong>, <strong>JavaScript</strong>, y frameworks modernos
        como <strong>React</strong>, <strong>Next Js</strong> y{" "}
        <strong>React Native</strong>. Me apasiona combinar creatividad con
        tecnología para crear soluciones digitales innovadoras y funcionales.
      </p>

      <p className={styles.description}>
        Soy un aprendiz constante: siempre estoy explorando nuevas herramientas,
        buenas prácticas y tendencias del ecosistema web y mobile para seguir
        creciendo profesionalmente y aportar valor a cada proyecto en el que
        participo.
      </p>
    </section>
  );
};
