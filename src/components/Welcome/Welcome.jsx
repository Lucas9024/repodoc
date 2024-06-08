import React from 'react';
import Fundodoctor from "../../assets/welcome/fundodoctor.png";
import Fundodoctor2 from "../../assets/welcome/fundodoctor02.png";
import "./Welcome.css";



const Avaliation = () => {

  const slides = [Fundodoctor, Fundodoctor2];



  return (


    <div className='grid items-center justify-center text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 '>


      <div className='items-center text-center relative sm:grid-cols-2'>

        <img
          src={Fundodoctor}
          className=''
        />


      </div>


      <div className='mx:auto relative sm:grid-cols-2 md:text-center'>


        <div className='text-left'>

          <div className='flex p-4'>

            <div className='py-5 pl-5'>
            <p className=' text-primary text-4xl lg:3xl font-bold textclass mb-2'>doc4U - Saúde Integral, Física e Mental</p>

              

              <p className='text-blackWhite text-4xl font-bold pb-2 textclasstrat  mb-2'>

                Consultas Inteligentes para o Tratamento de </p>

              <p className='text-primary text-4xl  font-bold textclass'>

                Todas as Doenças</p>


            </div>
          


          </div>

          <button className='text-white text-1xl font-bold bg-greenLight rounded-full w-[60%] p-3 uppercase hover:bg-primary duration-[100ms] btn-pulse'>
          Experimente grátis por 7 dias

        </button>

        <h3 className=' text-primary text-1xl sm:3xl lg:3xl  font-bold m-5 w-[60%] p-3'>Sem deslocamento e sem aglomeração</h3>

        </div>



        
        
      </div>




    </div>



  )
}



export default Avaliation
