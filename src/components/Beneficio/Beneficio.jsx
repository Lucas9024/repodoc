import React from 'react';
import Echo from "../../assets/alexabene.png";






const Beneficio = () => {
  return (


<div className='bg-redColor mx:auto w-auto px-10 flex justify-center items-center shadow z-[20] sticky top-0'>

<div className='m-2'>

<div className='mx-auto '>
  <div className='flex items-center justify-around gap-8 h-16'>
     

      {/*Links de Navegação*/}
    <div className=''>
    <p className='text-white text-1xl font-normal'>
   <b>ASSINOU, GANHOU</b>  uma Alexa Echo Pop! <b>CORRA</b> , é por tempo <b>LIMITADO.</b> 
</p>
    </div>

    <img src={Echo} className='w-[48px] h-[48px] hidden md:block'/>

  </div>
</div>


</div>
   
    </div>  

        
 
  )
}

export default Beneficio;



