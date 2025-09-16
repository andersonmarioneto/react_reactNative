import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Sobre from './routes/Sobre';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
