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
import RequireAuth from './Hooks/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import Analysis from './Pages/Dashboard/Analysis';
import Orders from './Pages/Dashboard/Orders';
import AddReview from './Pages/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PostsList from './features/PostsList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products/:productId"
          element={
            <RequireAuth>
              <Buy />
            </RequireAuth>
          } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Analysis />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
      {/* <PostsList /> */}
    </div>
  );
}

export default App;
