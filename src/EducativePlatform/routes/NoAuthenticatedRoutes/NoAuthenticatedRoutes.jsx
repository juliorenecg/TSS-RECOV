import { Route, Routes } from "react-router-dom"
import { NavBar } from "../../components"
import { LandingPage, RegisterPage } from "../../pages"

export const NoAuthenticatedRoutes = () => {



  
  return (
    <div>
        <NavBar/>
        <div className="main-content mt-5">
        <Routes>
        <Route path="" element={      <LandingPage/>}/>
          <Route path="inicio-sesion" element={<LandingPage/>}/>
          <Route path="registro" element={<RegisterPage/>}/> 
        </Routes>  
        </div>
    </div>
  )
}