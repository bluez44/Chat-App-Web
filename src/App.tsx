import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/common/Home";
import Login from "./pages/auth/Login";
import Chats from "./pages/common/Chats";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/auth">
            <Route index path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route index path="/auth/*" element={<h1>404</h1>} />
          </Route>
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
