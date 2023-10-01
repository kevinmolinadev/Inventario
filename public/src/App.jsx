import './styles/app.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
function App() {
  const storedIsLogin = sessionStorage.getItem('isLogin') === 'true';
  const [isLogin, setIsLogin] = useState(storedIsLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Login handle={setIsLogin} isLogin={isLogin} />} />
        <Route path='/dashboard/*' element={<Dashboard isLogin={isLogin} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
