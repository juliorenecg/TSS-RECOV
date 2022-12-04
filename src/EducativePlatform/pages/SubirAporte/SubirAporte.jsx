import { useState } from "react";
import styles from "./SubirAporte.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
export const SubirAporte = () => {
  const [titulocap, setTitulocap] = useState("");

  const [DescripEjem, setDescripEjem] = useState("");
  const [CodigoEjem, setCodigoEjem] = useState("");
  return (
    <div className={styles.Titulo}>
      <p>Crear un nuevo aporte</p>
      <div className={styles.Class}>
        <br />
        <h1>Nueva Contribución</h1>
        <br />
        <form>
          <label htmlFor="titulocap" className={styles.textform}>
            Titulo:{" "}
          </label>
          <input
            type="text"
            id="titulocap"
            name="titulocap"
            placeholder="Ingrese nombre del capitulo"
            value={titulocap}
            onChange={(e) => setTitulocap(e.target.value)}
            className={styles.box}
          />

          <br />
          <br />
          <label htmlFor="DescripEjem" className={styles.textform}>
            Descripción:
          </label>
          <input
            type="text"
            id="DescripEjem"
            name="DescripEjem"
            value={DescripEjem}
            onChange={(e) => setDescripEjem(e.target.value)}
            className={styles.box}
          />

          <br />
          <br />
          <label htmlFor="CodigoEjem" className={styles.textform}>
            Codigo del ejemplo:{" "}
          </label>
          <input
            type="text"
            id="CodigoEjem"
            name="CodigoEjem"
            value={CodigoEjem}
            onChange={(e) => setCodigoEjem(e.target.value)}
            className={styles.box}
          />
        </form>
        <br />
        <br />
        <button id="botonNuevoCap" type="button" className={styles.button}>
          Subir{" "}
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};
