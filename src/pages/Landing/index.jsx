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



const Landing = () => {
  return (
    <div>
      
     
        <Navbar/>
        <Welcome />
        <ButtonWp />
        <Welcome2 />
        <Presentation />
        <Funcional />
        <Avaliation />
        <Promotional />
        <Promotional2 />
        <Special />
        <Questions />
        <Footer />
        <FooterFinish />
    </div>
  );
}

export default Landing;
