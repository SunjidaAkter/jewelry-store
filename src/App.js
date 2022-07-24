import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
