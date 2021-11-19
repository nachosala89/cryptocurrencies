import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CryptoList />} />
        <Route path="/:id" element={<CryptoDetails />} />
      </Routes>
    </Router>
  </>
);

export default App;
