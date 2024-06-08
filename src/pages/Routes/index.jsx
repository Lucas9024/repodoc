import React from 'react';
import Beneficio from '../../components/Beneficio/Beneficio';
import Topo from '../../components/Topo/Topo';
import Navbar from '../../components/Navbar/Navbar';
import Welcome from '../../components/Welcome/Welcome';
import Welcome2 from '../../components/Welcome/Welcome2';
import Presentation from "../../components/Presentation/Presentation";
import Funcional from "../../components/Funcional/Funcional";
import Avaliation from '../../components/Avaliation/Avaliation';
import Promotional from '../../components/Promotional/Promotional';
import Promotional2 from '../../components/Promotional/Promotional2';
import Special from '../../components/Special/Special';
import Questions from '../../components/Questions/Questions';
import Footer from '../../components/Footer/Footer';
import FooterFinish from '../../components/FooterFinish/FooterFinish';
import ButtonWp from '../../components/Shared/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Landing = () => {
  return (
    <div>


      <BrowserRouter>
        
          <Routes>
            <Route path='/beneficio' element={<Beneficio />} />
            <Route path='/topo' element={<Topo />} />
            <Route path='/navbar' element={<Navbar />} />
            <Route path='/welcome' element={< Welcome />} />
            <Route path='/welcome2' element={< Welcome2 />} />
            <Route path='/buttonwp' element={<ButtonWp />} />
            <Route path='/presentation' element={<Presentation />} />
            <Route path='/funcional' element={<Funcional />} />
            <Route path='/avaliation' element={<Avaliation />} />
            <Route path='promotional' element={<Promotional />} />
            <Route path='promotional2' element={<Promotional2 />} />
            <Route path='special' element={<Special />} />
            <Route path='questions' element={<Questions />} />
            <Route path='footer' element={<Footer />} />
            <Route path='footerfinish' element={<FooterFinish />} />
          </Routes>
 
      </BrowserRouter>








    </div>
  );
}

export default Landing;
