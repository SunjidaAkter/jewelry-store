import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from './Pages/ProductDetail';
import Buy from './Components/ProductDetail/Buy';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailing" element={<Buy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
