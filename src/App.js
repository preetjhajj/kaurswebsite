import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Homepage from './Component/Homepage';
import About from './Component/About';
import Contact from './Component/Contact';
function App() {
  return (
    <div>
      <div className='page__wrap'>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
