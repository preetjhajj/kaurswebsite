import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Homepage from './Component/Homepage';
import About from './Component/About';
import Contact from './Component/Contact';
function App() {
  const getheightval = () => {
    const winheight = window.innerHeight;
    const sechgt = document.getElementById('homeSection')
    const hmsec = document.getElementsByClassName('page__wrap')[0]
    sechgt.style.height = winheight + "px"
    hmsec.style.height = winheight + "px"
}
  return (
    <div>
      <div className='page__wrap' onLoad={getheightval}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage getheightval={getheightval} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
