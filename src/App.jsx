import React from 'react';

import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return ( 

    
    <BrowserRouter>
        
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  
</BrowserRouter>

      
  )
}

export default App;


