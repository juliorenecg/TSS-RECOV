import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
export const ContribuirPage = () => {
  return (
    <div>
      <Link to={`/clases/contribuir/MisAportes`}>
        <div>
          <h1>Mis aportes</h1>
        </div>
      </Link>
      <Link to={`/clases/contribuir/AportesRecientes`}>
        <div>
          <h1>Aportes recientes</h1>
        </div>
      </Link>
    </div>
  );
};
