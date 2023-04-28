import React from 'react';
import { Layout } from './components/layouts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import CadastrarProjeto from './pages/portfolio/cadastrarProjeto/CadastrarProjeto';
import ListaProjetos from './pages/portfolio/listaProjetos/ListaProjetos';

const App: React.FC = () =>{
  return(
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='portfolio' element={<Portfolio />}/>
      <Route path='portfolio/cadastrarprojeto' element={<CadastrarProjeto/>}/>
      <Route path='portfolio/listaprojetos' element={<ListaProjetos/>}/>
    </Routes>      
    </Layout>
    </BrowserRouter>

  );
};

export default App
