import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/common/Home";
import Login from "./pages/auth/Login";
import Chats from "./pages/common/Chats";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import AuthLayout from "./components/layout/AuthLayout";

function App() {
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
          
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
