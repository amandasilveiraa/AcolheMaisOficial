import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Estoque from '../pages/Estoque/Estoque';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Estoque />} />
            <Route path='/estoque' element={<Estoque />} />
        </Routes>
    </BrowserRouter>
  );
}