import React from 'react'; 
import "react-html5video/dist/styles.css";
import Video from "../../assets/apresentacaodoctor.mp4";
import "./Presentation.css";

const Presentation = () => {


  return (


    <div className='classCenter container justify-center items-center text-center'>
      <br />
      <br />
            

      <h1 className='items-center text-center font-bold text-4xl sm:2xl md:2xl lg:4xl p-5 pt-20'>CONHEÇA A doc4U</h1>

      <video className='rounded-[12px] shadow-xl border-b-[15px] border-[2px] border-greenLight hover:shadow-[20px 15px 15px]' width="1150" height="500" controls>
        <source src={Video} type="video/mp4" />
      </video>

  </div>
  )
}

export default Presentation
