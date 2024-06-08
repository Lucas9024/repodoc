import React from 'react';
import Image1 from '../../assets/welcome/psiwelcome.png';
import Image2 from "../../assets/welcome/saudewelcome.png";
import Image3 from "../../assets/welcome/medicowelcome.png";
import Image4 from "../../assets/welcome/nutriwelcome.png";


const Welcome2 = () => {
  return (
    <div className=' container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer gap-4'>

      
      <div className='bg-primary rounded-[10px] text-center text-primary hover:bg-greenLight duration-[300ms]'>

      

  <div className='py-5 pl-5 text-center'>


    <img className='container object-contain w-[160px]' src={Image1}/>


  
    <p className='mb-[2px] text-white text-3xl font-bold'>Psicologia</p>

    <p className='text-white text-1xl font-light'>

Tenha um suporte emocional personalizado. Quando você quiser, sem carência.</p>


    </div>
</div>
    
      <div className='bg-primary rounded-[10px] text-center hover:bg-greenLight duration-[300ms]'>

     

      <div className='py-5'>

      <img className='container object-contain w-[160px]' src={Image2} alt="" />

    <p className='mb-[2px] text-white text-3xl font-bold'>
  Clínico Geral</p>

    <p className='text-white text-1xl font-light'>

    Faça sua consulta a qualquer momento, 24 horas por dia. Sem limites e sem carência.</p>
      </div>


      </div>

      <div className='bg-primary rounded-[10px] hover:bg-greenLight duration-[300ms]'>

<div className='py-5 pl-5 text-center '>

<img className='container object-contain w-[160px]' src={Image3} alt="" />

<p className='mb-[2px] text-white text-3xl font-bold'>Médicos Especialistas</p>

<p className='text-white text-1xl font-light '>

Consultas agendadas, ilimitadas, sem custos extras e sem carência.</p>


</div>


</div>


<div className='bg-primary rounded-[10px] text-center container-center hover:bg-greenLight duration-[300ms]'>



<div className='py-5 pl-5'>

<img className='container object-contain w-[160px]' src={Image4} alt="" />


<p className='mb-[2px] text-white text-3xl sm:2xl lg:2xl font-bold'>Nutricionista</p>

<p className='text-white text-1xl font-light'>
Dieta personalizada para atender suas necessidades em qualquer fase da vida, sem custos extras e sem carência.</p>
</div>


</div>
    </div>
  )
}

export default Welcome2;
