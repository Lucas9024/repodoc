import React from 'react';
import Whats from "../../assets/whatsapp.png"

const ButtonWp = () => {
  return (
    <div className='z-[20] sticky top-[700px] w-[200px] h- mr-2'>
<a href="https://api.whatsapp.com/send?phone=5531999422566&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20os%20planos%20dispon%C3%ADveis%20da%20doc4U" className='' target='_blank'>

<img src={Whats} className='w-[92px] h-[92px] float-right hover:scale-105
duration-[100ms] cursor-pointer hidden md:block'
/>

</a>
    </div>
    
  )
}

export default ButtonWp;
