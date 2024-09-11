
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { ContextProvider } from './Components/utils/global.context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element ={<h1>Page Not Found</h1>}/>
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;

