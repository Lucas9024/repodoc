import React from 'react';
import Cardio from "../../assets/special/cardiologista.png";
import Psi from "../../assets/special/coracao.png";
import Derma from "../../assets/special/dermatologista.png";
import Endocrino from "../../assets/special/endocrinologia.png";
import Geriatra from "../../assets/special/enfermagem.png";
import Gineco from "../../assets/special/ginecologista.png";
import Neuro from "../../assets/special/neurologia.png";
import Pediatra from "../../assets/special/medico.png";
import Orto from "../../assets/special/ortopedista.png";
import Trauma from "../../assets/special/fratura.png";
import Otorrino from "../../assets/special/otorrinolaringologia.png";
import Uro from "../../assets/special/urologista.png";


const Special = () => {
  return (

    <div>
    
    <h1 className='text-center text-4xl text-blackWhite font-bold justfy-start p-20'>Confira as especialidades disponíveis </h1>

    <div className='container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-between items-center cursor-pointer gap-4'>



<div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-3'>
<img src={Cardio} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>


<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Cardiologia</p>

<p className='text-white text-[15px] font-light font-semibold'>

Cuidando do seu coração para uma vida saudável.</p>


</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>

    <img src={Psi} className='w-[80px] h-[80px]'/>

<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Psiquiatria</p>

<p className='text-white text-1xl font-light font-semibold'>

Cuidando da sua saúde mental</p>


</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
    <img src={Derma} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Dermatologia</p>

<p className='text-white text-1xl font-light font-semibold'>

Beleza e saúde em equilíbrio</p>

</div>
      
    </div>

    </div>

    <br />


    <div className='container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-between items-center cursor-pointer gap-4'>



<div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
<img src={Endocrino} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>


<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Endocrinologia</p>

<p className='text-white text-1xl font-light font-semibold'>

Equilíbrio hormonal para uma vida vibrante.</p>

</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>

    <img src={Geriatra} className='w-[80px] h-[80px]'/>

<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Geriatria</p>

<p className='text-white text-1xl font-light font-semibold'>

Envelheça com dignidade e vitalidade.</p>


</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
    <img src={Gineco} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Ginecologia</p>

<p className='text-white text-1xl font-light font-semibold'>

Cuidando da saúde íntima feminina.</p>


</div>
      
    </div>

    </div>

    <br />


    <div className='container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-between items-center cursor-pointer gap-4'>



<div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
<img src={Neuro} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>


<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Neurologia</p>

<p className='text-white text-1xl font-light font-semibold'>

A saúde do seu sistema nervoso</p>


</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>

    <img src={Pediatra} className='w-[80px] h-[80px]'/>

<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Pediatria</p>

<p className='text-white text-1xl font-light font-semibold'>

Cuidado e atenção especial.</p>

</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
    <img src={Orto} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>Ortopedia</p>

<p className='text-white text-1xl font-light font-semibold'>

Cuidando do seu movimento.</p>


</div>
      
    </div>

    </div>

    <br />

  


    <div className='container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-between items-center cursor-pointer gap-4'>



<div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
<img src={Trauma} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>


<p className='mb-[2px] text-white text-[20px] xl:text-3xl font-bold pr-[4px]'>
Traumatologia</p>

<p className='text-white text-1xl font-light font-semibold '>

Recupere sua mobilidade.</p>


</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>

    <img src={Otorrino} className='w-[80px] h-[80px]'/>

<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[17px] xl:text-3xl font-bold pr-[4px]'>Otorrinolaringologia</p>

<p className='text-white text-1xl font-light font-semibold'>

Ouça, respire e viva melhor.</p>


</div>
      
    </div>

    <div className='flex bg-primary items-center rounded-[5px] border-b-4 border-greenLight hover:bg-greenLight p-2'>
    <img src={Uro} className='w-[80px] h-[80px]'/>
<div className='py-5 pl-5'>
<p className='mb-[2px] text-white text-[18px] xl:text-3xl font-bold'>
Urologia</p>

<p className='text-white text-1xl font-light font-semibold '>

Bem-estar da sua saúde urológica</p>


</div>
      
    </div>

    </div>

    <br />

   

    </div>
  )
}

export default Special
