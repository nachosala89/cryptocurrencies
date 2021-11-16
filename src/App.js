import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CryptoList from './components/CryptoList';
import Crypto from './components/Crypto';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CryptoList />} />
        <Route path="/:id" element={<Crypto />} />
      </Routes>
    </Router>
  </>
);

export default App;
