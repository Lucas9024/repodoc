import React from 'react';
import "./Topo.css";

const Topo = () => {
  return (


<div className='bg-primary mx:auto w-auto px-10 flex justify-center items-center shadow z-[20] sticky top-0'>

<div className=' '>

<div className='mx-auto '>
  <div className='flex items-center justify-around gap-8 h-16'>
     

      {/*Links de Navegação*/}
    <div className='hidden md:block'>
    <p className='text-white text-1xl font-normal'>
    sac@doc4U.com.br &nbsp;   &nbsp;  &nbsp;  &nbsp;
Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto Feriados
</p>
    </div>

    <div className='flex items-center bg-greenLight hover:bg-whiteLight h-[100%] pl-2 pr-2'>
        <button className='text-whiteLight font-bold hover:text-primary'>Consulta - Clínico Geral</button>
      </div>

  </div>
</div>


</div>
   
    </div>  

        
 
  )
}

export default Topo;
