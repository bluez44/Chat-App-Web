import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/common/Home'
import Login from './pages/auth/Login'
import Chats from './pages/common/Chats';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/auth">
        <Route index path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<h1>Register</h1>} />
      </Route>
      <Route path="/*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App
