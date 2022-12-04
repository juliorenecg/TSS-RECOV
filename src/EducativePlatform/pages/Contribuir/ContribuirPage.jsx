import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
export const ContribuirPage = () => {
  return (
    <div>
      <div>
        <h1>Mis aportes</h1>
        <Link to={`/clases/contribuir/MisAportes`}>
          <p>Revisar mis aportes</p>
        </Link>
        <Link to={`/clases/contribuir/SubirAporte`}>
          <p>Subir aporte</p>
        </Link>
        
      </div>

      <Link to={`/clases/contribuir/AportesRecientes`}>
        <div>
          <h1>Aportes recientes</h1>
        </div>
      </Link>
    </div>
  );
};
