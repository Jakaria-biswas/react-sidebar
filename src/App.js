import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Reports from './pages/Reports';


function App() {
  return (
    <div className="App">
 <Navbar/>
     <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/product"  element={<Product/>}></Route>
        <Route path="/reports"  element={<Reports/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
