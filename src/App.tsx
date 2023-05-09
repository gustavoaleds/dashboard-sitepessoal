import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';

import AuthRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () =>{
  return(
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path="/*" element={<AuthRoutes/>}/>
    </Routes>      
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;