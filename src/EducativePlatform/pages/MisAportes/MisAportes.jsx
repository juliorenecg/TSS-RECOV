import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { Loading } from "../../../UI";
import { MaterialCard } from "../../components";
import styles from "./MisAportes.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import { useEffect } from "react";
import { get } from "../../helpers";
import { async } from "q";
import { useState } from "react";
export const MisAportes = () => {
  const [aportes, setAportes] = useState([])
  const navigate = useNavigate()
  const getAportes = async() =>{
    const id_usuario = localStorage.getItem("id_usuario")
    console.log(id_usuario)
    const data = await get("http://142.93.203.113:3001/api/contributions/?user="+id_usuario)
    setAportes(data)
    console.log(aportes)
  }
  useEffect(()=>{
    getAportes()
  },[])
  return (
    <div className={styles.Titulo}>
      <h1>Mis aportes</h1>
      {aportes.map((aporte)=>(<div className={styles.Class} onClick={()=>{navigate(""+aporte.id)}}>
        <h3>{aporte.Titulo}</h3>
        <img src={PerfilU} alt="" className={styles.foto} />
        <p>
          {aporte.descripcion}{aporte.id}
        </p>

        <button id="botonNuevoCap" type="button" className={styles.button}>
          Eliminar{" "}
        </button>
      </div>))}   
    
    </div>
  );
};
