import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from './pages/Booking';
import EyelashServices from './pages/EyelashServices';
import NailServices from './pages/NailServices';
import Promotions from './pages/Promotions';
import Login from './pages/Login';
import Layout from './Layout';
// import NavigationBar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return(
    <Router>
      <Routes>  
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/eyelash" element={<EyelashServices />} />
          <Route path="/nail" element={<NailServices />} />
          <Route path="/promotions" element={<Promotions />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;