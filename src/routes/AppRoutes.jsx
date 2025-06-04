import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Estoque from '../pages/Estoque/Estoque';
import Cadastro from '../pages/Cadastro/Cadastro';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path='/estoque' element={<Estoque />} />
        </Routes>
    </BrowserRouter>
  );
}