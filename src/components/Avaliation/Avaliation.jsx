import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation,EffectFade} from 'swiper/modules';
import AvaliaBreno from "../../assets/avaliation/avaliabreno.png";
import AvaliaGabriel from "../../assets/avaliation/avaliagabriel.png";
import AvaliaPatricia from "../../assets/avaliation/avaliapatricia.png";
import AvaliaJessica from "../../assets/avaliation/avaliajessica.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Avaliation.css";



const Avaliation = () => {

    const slides = [AvaliaBreno,AvaliaPatricia,AvaliaGabriel,AvaliaJessica];


  return (
    <div className='container'>

<h1 className='items-center text-center font-bold text-4xl sm:2xl md:2xl lg:4xl p-5 pt-20'>AVALIAÇÕES DE CLIENTES</h1>

<p className='font-regular lh-[30px] hover:sans-serif text-center text-[18px] sm:text-[20px] pb-10'>Identidades dos clientes foram
preservadas de acordo com a LGPD</p>

        <div >

          <Swiper
          slidesPerView={2}
          
          modules={[Navigation, Pagination, EffectFade]}
          pagination
          
          >

          {slides.map(slide => (
            <SwiperSlide
           
            >
              <img src={slide} alt={slides} className='cursor-pointer hover:pb-px'/>
            </SwiperSlide>
          ))}

<br /><br />
          </Swiper>
          <br />

        </div>
      
    </div>
  )
}



export default Avaliation
