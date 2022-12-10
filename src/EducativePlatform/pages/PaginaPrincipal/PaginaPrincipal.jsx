import { Link } from 'react-router-dom';

import RevisarAporte from '../PaginaPrincipal/fotos/RevisarAporte.jpg';
import SubirAporte from '../PaginaPrincipal/fotos/SubirAporte.jpg';
import styles from './PaginaPrincipal.module.css';

export const PaginaPrincipal = () => {
  return (
    <div>
      <h1>Plataforma Educativa de Simulacion de Sistemas</h1>
      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
          <p>Amplia tus conocimientos en Simulacion de Sistemas</p>
          <Link to={`/clases/contribuir/Registro`}>
            <p>Registrate</p>
          </Link>
        </div>

        <h2>Nuestro contenido base</h2>
      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
          <p>Tema 1</p>
          <p>Tema 2</p>
          <p>Tema 3</p>
          <p>Tema 4</p>
          <p>Tema 5</p>

          <Link to={`/clases/contribuir/Registro`}>
            <p>Registrate</p>
          </Link>
        </div>

        <h2>Quienes somos?</h2>
      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
          <p>parrafo</p>
          <Link to={`/clases/contribuir/Registro`}>
            <p>Registrate</p>
          </Link>
        </div>

        <h2>Que ofrecemos?</h2>
      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
          <p>parrafo</p>
          <Link to={`/clases/contribuir/Registro`}>
            <p>Registrate</p>
          </Link>
        </div>

        <div className={styles.Cuadro}>
          <img src={SubirAporte} alt="" className={styles.fotoCuadro2} />
          <Link to={`/clases/contribuir/SubirAporte`}>
            <p>Subir aporte</p>
          </Link>
        </div>
      </div>

      <Link to={`/clases/contribuir/AportesRecientes`}>
        <h2>Beneficios</h2>
      </Link>
      <div className={styles.Titulo}>
        <div className={styles.Class}>
          <h2>Material disponible 24/7</h2>
          <p>
            Tendras el material accesible todo el dia, todos los dias.
          </p>
        </div>
        <div className={styles.Class}>
          <h2>Aprende en comunidad</h2>
          <p>
           Conecta con otros estudiantes, comparte tus proyectos y tus dudas.
          </p>
        </div>

        <div className={styles.Class}>
          <h2>Foros y respuestas a tus preguntas</h2>
          <p>
           Participa en foros para mejorar tu conocimiento.
          </p>
        </div>

        <div className={styles.Class}>
          <h2>Tareas didacticas</h2>
          <p>
           Participa en foros para mejorar tu conocimiento.
          </p>
        </div>
      </div>

      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
          <p>Contactanos</p>
          <Link to={`/clases/contribuir/Registro`}>
            <p>Registrate</p>
          </Link>

          </div>
          </div>

    </div>    
    </div>
    </div>
    </div>

  );
};
