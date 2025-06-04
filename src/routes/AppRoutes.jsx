import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Estoque from '../pages/Estoque/Estoque';
import Cadastro from '../pages/Cadastro/Cadastro';
import Dashboard from '../pages/Dashboard/Dashboard';
import Perfil from '../pages/Perfil/Perfil';
import Acolhidos from '../pages/Acolhidos/Acolhidos';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/estoque' element={<Estoque />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/acolhidos' element={<Acolhidos />} />
        </Routes>
    </BrowserRouter>
  );
}