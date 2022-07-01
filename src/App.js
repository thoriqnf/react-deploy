import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

// router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  console.log("isLogin", isLogin);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to={"/register"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>HALAMAN TIDAK DITEMUKAN</h1>
    </div>
  );
}

export default App;
