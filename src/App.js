import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Product from './Product';
import Masterchef from './Masterchef';
import Pages from './Pages';
import Contect from './Contect';
import Footer from './Footer';
import Sarvices from './Sarvices';
import Testimonial from './Testimonial';
import Booking from './Booking';
import Edit from './Edit';


function App()
 {

  return (
    <>
    <Navbar></Navbar>

    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/Masterchef' element={<Masterchef/>}></Route>
      <Route path='/Edit/:eid' element={<Edit/>}></Route>
      <Route path='/Pages' element={<Pages/>}></Route>
      <Route path='/Sarvices' element={<Sarvices/>}></Route>
      <Route path='/Testimonial' element={<Testimonial/>}></Route>
      <Route path='/Booking' element={<Booking/>}></Route>
      <Route path='/Contect' element={<Contect/>}></Route>
    </Routes>

    <Footer></Footer>
   
    
</>
  );
}

export default App;
