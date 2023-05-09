import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layouts';
import Home from "../pages/home";
import CadastrarProjeto from "../pages/portfolio/cadastrarProjeto";
import ListaProjetos from "../pages/portfolio/listaProjetos";
import Portfolio from "../pages/portfolio";
import { useAuth } from "../contexts/AuthContext";


const AppRoutes: React.FC = () => {
    const { authenticated, isLoading } = useAuth();

    if (isLoading) {
        return <h1>Carregando...</h1>
    }
    if(!authenticated) {
        return <Navigate to='/login'/>
    }
    return(
        <Layout>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='portfolio' element={<Portfolio />}/>
            <Route path='portfolio/cadastrarprojeto' element={<CadastrarProjeto/>}/>
            <Route path='portfolio/listaprojetos' element={<ListaProjetos/>}/> 
        </Routes> 
        </Layout>
    )
}
export default AppRoutes;