// eslint-disable-next-line no-unused-vars
import React from 'react';
import promooff from "../../assets/promooff.png";
import promotional from "../../assets/iconepromotional.png";
import Alexa from "../../assets/alexapromonew.png";
import Button from '../Shared/Button';
import "./Promotional.css";
import Visto from "../../assets/iconevisto.png"

const Promotional = () => {
  return (
    <div className='container w-[100%]'>
      <br/>
      <br/>


      <h1 id='plano'
          className='text-center text-blackWhite text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-10  pb-5'>CONSULTAS
        SIMPLES E ACESSÍVEIS PARA TODAS AS FAMÍLIAS</h1>


      <br/>
      <br/>
      <br/>

      <div className='container container-center items-center grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4'>

        <div className='promotional'>
          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>


            <img src={promotional}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] mr-[380px] hidden md:block'/>
            <div className='cardTitles p-2'>
              <h1 className=' text-white text-3xl sm:2xl lg:xl  md:2xl  font-bold'>Fique Tranquilo</h1>
              <h1 className=' text-white text-3xl sm:2xl lg:4xl md:2xl font-bold '>Família 4</h1>
              <h1 className=' text-white   text-2xl sm:1xl lg:4xl md:2xl font-semibold'>Para 4 Pessoas </h1>

            </div>
            <img src={promooff}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] ml-[350px] hidden md:block'/>

          </div>

          <div className='flex justify-around mx-auto bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>CONFIRA
              OS BENEFÍCIOS</h1>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Clínico Geral</h1>

          </div>

          <div className='bg-white'>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>24 horas por dia</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>7 dias por semana</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Médicos
              Especialistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Indicadas pelo Clínico Geral</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com Agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Nutricionistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Orientações para uma vida mais
                saudável</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>A cada 90 dias</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Psicólogos</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Cuide muito bem da sua saúde mental</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Até 4 consultas por mês, por plano</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Mais Benefícios</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem carência</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem custos extras</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[350px] text-blackText text-left font-semibold '>Pedidos de exames, receitas, atestados
                médicos e encaminhamentos válidos em todo Brasil</h2>
            </div>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Vidas Extras
            </h1>

          </div>

          <div className='bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>INCLUA
              ATÉ MAIS 3 DEPENDENTES</h1>
            <hr className=' container w-[90%] text-gray'/>

          </div>


          <div className='flex justify-around grid: grid-cols-2 mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-4xl sm:2xl lg:4xl  font-bold pt-14  pb-12 '>Ganhe uma <br/>
              Alexa Echo Pop
              <h1 className=' text-white text-2xl sm:2xl lg:2xl  font-bold'> Se permanecer no plano </h1>
            </h1>

            <img src={Alexa} className='object-contain mb-5 hidden md:block top-[-5%]'/>

          </div>

          <div className='text-center items-center mx-auto bg-white pb-5'>
            <h1 className=' text-primary text-4xl sm:2xl lg:5xl  font-bold pt-6  pb-5'>Plano anual
              Um ano tranquilo <br/></h1>

            <p className='text-blackWhite text-2xl sm:2xl lg:2xl  font-bold pt-1  pb-1 '>
              R$ 73,33/pessoa por mês</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              12x R$ 219,99 no Cartão de Crédito</p>
            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              R$ 2.199,99/ano - A vista, 5% de desconto.</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-3 '>
              SEM STRESS. VOCÊ PODE DIVIDIR EM ATÉ 12 X</p>

            <button
              className='text-white text-1xl font-bold bg-greenLight rounded-full w-[90%] p-3 uppercase hover:bg-primary duration-[100ms] btn-pulse'>
              Clínico Geral
              7 Dias Grátis

            </button>

          </div>


        </div>


        <div className=''>
          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>


            <img src={promotional}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] mr-[380px] hidden md:block'/>
            <div className='cardTitles p-2'>
              <h1 className=' text-white text-3xl sm:2xl lg:xl  md:2xl  font-bold'>Fique Tranquilo</h1>
              <h1 className=' text-white text-3xl sm:2xl lg:4xl md:2xl font-bold '>Família 3</h1>
              <h1 className=' text-white   text-2xl sm:1xl lg:4xl md:2xl font-semibold'>Para 3 Pessoas </h1>

            </div>
            <img src={promooff}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] ml-[350px] hidden md:block'/>

          </div>

          <div className='flex justify-around mx-auto bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>CONFIRA
              OS BENEFÍCIOS</h1>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Clínico Geral</h1>

          </div>

          <div className='bg-white'>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>24 horas por dia</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>7 dias por semana</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Médicos
              Especialistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Indicadas pelo Clínico Geral</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com Agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Nutricionistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Orientações para uma vida mais
                saudável</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>A cada 90 dias</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Psicólogos</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Cuide muito bem da sua saúde mental</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Até 4 consultas por mês, por plano</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Mais Benefícios</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem carência</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem custos extras</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[350px] text-blackText text-left font-semibold '>Pedidos de exames, receitas, atestados
                médicos e encaminhamentos válidos em todo Brasil</h2>
            </div>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Vidas Extras
            </h1>

          </div>

          <div className='bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>INCLUA
              ATÉ MAIS 3 DEPENDENTES</h1>
            <hr className=' container w-[90%] text-gray'/>

          </div>


          <div className='flex justify-around grid: grid-cols-2 mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-4xl sm:2xl lg:4xl  font-bold pt-14  pb-12 '>Ganhe uma <br/>
              Alexa Echo Pop
              <h1 className=' text-white text-2xl sm:2xl lg:2xl  font-bold'> Se permanecer no plano </h1>
            </h1>

            <img src={Alexa} className='object-contain mb-5 hidden md:block top-[-5%]'/>

          </div>

          <div className='text-center items-center mx-auto bg-white pb-5'>
            <h1 className=' text-primary text-4xl sm:2xl lg:5xl  font-bold pt-6  pb-5'>Plano anual
              Um ano tranquilo <br/></h1>

            <p className='text-blackWhite text-2xl sm:2xl lg:2xl  font-bold pt-1  pb-1 '>
              R$ 73,33/pessoa por mês</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              12x R$ 219,99 no Cartão de Crédito</p>
            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              R$ 2.199,99/ano - A vista, 5% de desconto.</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-3 '>
              SEM STRESS. VOCÊ PODE DIVIDIR EM ATÉ 12 X</p>

            <button
              className='text-white text-1xl font-bold bg-greenLight rounded-full w-[90%] p-3 uppercase hover:bg-primary duration-[100ms] btn-pulse'>
              Clínico Geral
              7 Dias Grátis

            </button>

          </div>


        </div>

      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className='container container-center items-center grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4'>

        <div className=''>
          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>


            <img src={promotional}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] mr-[380px] hidden md:block'/>
            <div className='cardTitles p-2'>
              <h1 className=' text-white text-3xl sm:2xl lg:xl  md:2xl  font-bold'>Fique Tranquilo</h1>
              <h1 className=' text-white text-3xl sm:2xl lg:4xl md:2xl font-bold '>Casal</h1>
              <h1 className=' text-white   text-2xl sm:1xl lg:4xl md:2xl font-semibold'>Para 2 Pessoas </h1>

            </div>
            <img src={promooff}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] ml-[350px] hidden md:block'/>

          </div>

          <div className='flex justify-around mx-auto bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>CONFIRA
              OS BENEFÍCIOS</h1>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Clínico Geral</h1>

          </div>

          <div className='bg-white'>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>24 horas por dia</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>7 dias por semana</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Médicos
              Especialistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Indicadas pelo Clínico Geral</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com Agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Nutricionistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Orientações para uma vida mais
                saudável</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>A cada 90 dias</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Psicólogos</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Cuide muito bem da sua saúde mental</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Até 4 consultas por mês, por plano</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Mais Benefícios</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem carência</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem custos extras</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[350px] text-blackText text-left font-semibold '>Pedidos de exames, receitas, atestados
                médicos e encaminhamentos válidos em todo Brasil</h2>
            </div>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Vidas Extras
            </h1>

          </div>

          <div className='bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>INCLUA
              ATÉ MAIS 3 DEPENDENTES</h1>
            <hr className=' container w-[90%] text-gray'/>

          </div>


          <div className='flex justify-around grid: grid-cols-2 mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-4xl sm:2xl lg:4xl  font-bold pt-14  pb-12 '>Ganhe uma <br/>
              Alexa Echo Pop
              <h1 className=' text-white text-2xl sm:2xl lg:2xl  font-bold'> Se permanecer no plano </h1>
            </h1>

            <img src={Alexa} className='object-contain mb-5 hidden md:block top-[-5%]'/>

          </div>

          <div className='text-center items-center mx-auto bg-white pb-5'>
            <h1 className=' text-primary text-4xl sm:2xl lg:5xl  font-bold pt-6  pb-5'>Plano anual
              Um ano tranquilo <br/></h1>

            <p className='text-blackWhite text-2xl sm:2xl lg:2xl  font-bold pt-1  pb-1 '>
              R$ 73,33/pessoa por mês</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              12x R$ 219,99 no Cartão de Crédito</p>
            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              R$ 2.199,99/ano - A vista, 5% de desconto.</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-3 '>
              SEM STRESS. VOCÊ PODE DIVIDIR EM ATÉ 12 X</p>

            <button
              className='text-white text-1xl font-bold bg-greenLight rounded-full w-[90%] p-3 uppercase hover:bg-primary duration-[100ms] btn-pulse'>
              Clínico Geral
              7 Dias Grátis

            </button>

          </div>

        </div>


        <div className=''>
          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>


            <img src={promotional}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] mr-[380px] hidden md:block'/>
            <div className='cardTitles p-2'>
              <h1 className=' text-white text-3xl sm:2xl lg:xl  md:2xl  font-bold'>Fique Tranquilo</h1>
              <h1 className=' text-white text-3xl sm:2xl lg:4xl md:2xl font-bold '>Individual</h1>
              <h1 className=' text-white   text-2xl sm:1xl lg:4xl md:2xl font-semibold'>Para 1 pessoa </h1>

            </div>
            <img src={promooff}
                 className='promo absolute object-contain mt-[-30px] pb-[40px] ml-[350px] hidden md:block'/>

          </div>

          <div className='flex justify-around mx-auto bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>CONFIRA
              OS BENEFÍCIOS</h1>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Clínico Geral</h1>

          </div>

          <div className='bg-white'>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>24 horas por dia</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>7 dias por semana</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Médicos
              Especialistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Ilimitadas</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Indicadas pelo Clínico Geral</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com Agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Nutricionistas</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Orientações para uma vida mais
                saudável</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>A cada 90 dias</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Consultas com Psicólogos</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Cuide muito bem da sua saúde mental</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Até 4 consultas por mês, por plano</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Com agendamento</h2>


            </div>

          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Mais Benefícios</h1>

          </div>

          <div className='bg-white'>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem carência</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>

            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[300px] text-blackText text-left font-semibold '>Consultas sem custos extras</h2>


            </div>
            <hr className=' container w-[90%] text-gray'/>


            <div className='flex items-center pb-1 ml-10'>

              <img src={Visto} alt="" className='mr-1'/>

              <h2 className='w-[350px] text-blackText text-left font-semibold '>Pedidos de exames, receitas, atestados
                médicos e encaminhamentos válidos em todo Brasil</h2>
            </div>


          </div>

          <div className='flex justify-around mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-2xl sm:2xl lg:4xl  font-bold pt-5  pb-5 '>Vidas Extras
            </h1>

          </div>

          <div className='bg-white'>
            <h1 className='text-center text-primary text-3xl mx-auto sm:3xl lg:3xl md:2xl  font-bold pt-4  pb-5'>INCLUA
              ATÉ MAIS 3 DEPENDENTES</h1>
            <hr className=' container w-[90%] text-gray'/>

          </div>


          <div className='flex justify-around grid: grid-cols-2 mx-auto bg-gradient-to-r from-primary to-greenLight'>
            <h1 className=' text-white text-4xl sm:2xl lg:4xl  font-bold pt-14  pb-12 '>Ganhe uma <br/>
              Alexa Echo Pop
              <h1 className=' text-white text-2xl sm:2xl lg:2xl  font-bold'> Se permanecer no plano </h1>
            </h1>

            <img src={Alexa} className='object-contain mb-5 hidden md:block top-[-5%]'/>

          </div>

          <div className='text-center items-center mx-auto bg-white pb-5'>
            <h1 className=' text-primary text-4xl sm:2xl lg:5xl  font-bold pt-6  pb-5'>Plano anual
              Um ano tranquilo <br/></h1>

            <p className='text-blackWhite text-2xl sm:2xl lg:2xl  font-bold pt-1  pb-1 '>
              R$ 73,33/pessoa por mês</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              12x R$ 219,99 no Cartão de Crédito</p>
            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-1 '>
              R$ 2.199,99/ano - A vista, 5% de desconto.</p>

            <p className='text-blackWhite text-1xl sm:2xl lg:2xl  font-semibold pt-1  pb-3 '>
              SEM STRESS. VOCÊ PODE DIVIDIR EM ATÉ 12 X</p>

            <button
              className='text-white text-1xl font-bold bg-greenLight rounded-full w-[90%] p-3 uppercase hover:bg-primary duration-[100ms] btn-pulse'>
              Clínico Geral
              7 Dias Grátis

            </button>

          </div>

        </div>
        <br/>
        <br/>
        <br/>


      </div>

    </div>


  )
}

export default Promotional
