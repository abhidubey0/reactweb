import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './Navbar';
import Footer from './components/Footer';
const App = () =>{
   return(
     <>
     <Navbar />
       <Routes>
         <Route exact path = "/" element ={<Home/>}/>
         <Route exact path = "/about" element ={<About/>}/>
         <Route exact path = "/service" element ={<Service/>}/>
         <Route exact path = "/contact" element ={<Contact/>}/>
       </Routes>
       <Footer/>
     </>
   );
}
export default App;

