import './styles/app.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Login handle={setIsLogin} />} />
        <Route path='/dashboard/*' element={<Dashboard isLogin={isLogin} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
