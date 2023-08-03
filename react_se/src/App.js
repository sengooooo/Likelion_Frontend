import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage/Login"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import { Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
