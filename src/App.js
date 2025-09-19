import './App.css';
import { Routes, Route } from 'react-router-dom';
import Tool from './Pages/Main/ToolPage/Tool';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tool />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
