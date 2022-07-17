import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Portofolio from './Components/Portofolio/Portofolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';





function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home />} />
        <Route path='portofolio' element={<Portofolio />} />
        <Route path='about' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
