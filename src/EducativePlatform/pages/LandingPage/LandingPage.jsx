import { Footer, LoginForm } from "../../components";
import "./LandingPage.css";
export const LandingPage = () => {

  return (
    <main className="d-flex flex-column ">
      <section className="d-flex flex-row w-100 h-100 justify-content-around mb-5">
        <img
          className="h-50 w-25"
          src="./assets/images/sally22.png"
          alt="sally"
        />
        <LoginForm/>
      </section>
    </main>
  );
};
