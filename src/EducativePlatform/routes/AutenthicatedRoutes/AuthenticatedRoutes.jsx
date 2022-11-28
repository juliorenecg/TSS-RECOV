import { Route, Routes } from "react-router-dom";
import { NavBar, SideBar } from "../../components";
import { ClassContent, ClassPage, CodeEditorPage, CreateContentPage, JoinClassPage, MaterialPage, PracticePage, RegisterClassPage } from "../../pages";

export const AuthenticatedRoutes = () => {
  ////
///
  return (
      <div className="row w-100">
        <div className="col-12 w-100">
          <NavBar color="light" userName={"asdsa"} logged={"true"}/>
        </div>
        <div className="col-2">
          <SideBar />
        </div>
        <div className="main-content col-10">
          <Routes>
            <Route path="" element={<ClassPage/>} />
            <Route path="/crear-clase" element={<RegisterClassPage/>}/>
            <Route path="/unirse-clase" element={<JoinClassPage/>}/>
            <Route path="/:id" element={<ClassContent/>}/>
            <Route path="/:id/crear-capitulo" element={<CreateContentPage/>}/>
            <Route path="/:id/material/:id_capitulo" element={<MaterialPage/>}/>
            <Route path="/:id/practica/:id_practica" element={<PracticePage/>}/>
            <Route path="/:id/practica/:id_practica/compilador/:id_ejemplo" element={<CodeEditorPage/>}/>
          </Routes>
        </div>
      </div>
  );
};
