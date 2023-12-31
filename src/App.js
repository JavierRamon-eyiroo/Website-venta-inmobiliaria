import React from 'react';

//importamos routes and route
import {Routes, Route} from 'react-router-dom';

//improtamos components
import Header from './components/Header';
import Footer from './components/Footer';

//importamos pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
