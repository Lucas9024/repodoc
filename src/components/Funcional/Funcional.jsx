import React from 'react';
import Image from "../../assets/funcional/plano.png";
import Image2 from "../../assets/funcional/selecione.png";
import Image3 from "../../assets/funcional/acesso.png";
import Image4 from "../../assets/funcional/agende.png";
import './Funcional.css'



const Funcional = () => {
    return (

        <div className=' items-center justify-center m-0 m-auto' id='funcional'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />

            <br /><br />
            <br />
            <br />

            <h1 className='items-center text-center font-bold text-4xl sm:2xl md:2xl lg:4xl p-5 pt-20' >COMO FUNCIONA</h1>
                <br />
                <br />

          
          <div className='flex justify-center container-center p-[20px]'>

          
               

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-6 '>


                    <div className='items-center text-center relative sm:grid-cols-2 p-2 mt-20'>

                        <img
                            src={Image}
                            className='ml-[65px] absolute top-[-65px] shadow-xl'
                        />

                        <div className='container-center items-center justify-center  
                        
                        border-b-[10px] border-greenLight
                        mb-6 bg-primary
                        p-12
                        w-[240px]
                        h-[170px]
                        rounded-[5px] shadow-md
                        cursor-pointer hover:bg-greenLight
                        hover:p-14
                        hover:border-primary
                        hover:scale-105
                        duration-300
                        '>          
                    <h1 className='text-white text-[20px] sm:2xl lg:3xl  font-bold '>Adquira o Plano</h1>
                            <h2 className='text-white text-1xl sm:2xl lg:4xl font-semibold '>Escolha entre as opções</h2>

                        </div>
                    </div>


                    <div className='items-center text-center relative sm:grid-cols-2 p-2 mt-20'>


                        <img
                            src={Image2}
                            className='ml-[65px] absolute top-[-65px]  shadow-md'
                        />

                        <div className=' items-center justify-center mb-2 
     border-b-[10px] border-greenLight
    bg-primary
      p-12
    w-[240px]
    h-[170px]
    rounded-[5px] shadow-md
    cursor-pointer hover:bg-greenLight
    hover:border-primary
    hover:scale-105
    duration-300
    '>


                            <h1 className='text-white text-[20px] sm:2xl lg:4xl  font-bold '>Selecione</h1>
                            <h2 className='text-white text-[14px] sm:2xl lg:4xl font-semibold '>Selecione no menu superior à direita a opção – “Minha Conta”</h2>
                           
                        </div>


                    </div>

                    <div className='items-center text-center relative cursor-pointer sm:grid-cols-2 p-2 mt-20'>
                        <img
                            src={Image3}
                            className='ml-[65px] absolute top-[-65px]  shadow-md'
                        />
                        <div className=' items-center justify-center 
     border-b-[10px] border-greenLight
    bg-primary  p-12
    w-[240px]
    h-[170px]
    rounded-[5px] shadow-md
    cursor-pointer hover:bg-greenLight
    hover:p-12
     hover:border-primary
     hover:scale-105
     duration-300
    '>

                            <h1 className='text-white text-[20px] sm:2xl lg:4xl  font-bold '>Acesse o
                                Clínico Geral</h1>
                            <h2 className='text-white text-[14px] sm:2xl lg:4xl font-semibold '>Clicando em Consulta – Clínico Geral</h2>

                        </div>

                    </div>

                    <div className='items-center text-center relative sm:grid-cols-2 p-2 mt-20'>
                        <img
                            src={Image4}
                            className='ml-[65px] absolute top-[-65px]  shadow-md hover:border-primary
                            hover:scale-105
                            duration-300'
                        />
                        <div className=' items-center justify-center 
     border-b-[10px] border-greenLight
    mb-4 bg-primary 
    p-2
    pt-12
    w-[240px]
    h-[170px]
    rounded-[5px] 
    shadow-md bb-[40px] bc-primary
    cursor-pointer hover:bg-greenLight
    hover:p-12
     hover:border-primary
     hover:scale-105
     duration-300 py-2 px-8
    '>

                            <h1 className='text-white text-[20px] sm:2xl lg:3xl  font-bold '>Agendar Consulta</h1>
                            <h2 className='text-white text-1xl sm:2xl lg:3xl font-semibold '>
                                Clicando em Minha Conta</h2>

                        </div>

                    </div>

                </div>

                </div>

        </div> 

    )
}

export default Funcional;
