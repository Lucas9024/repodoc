import React from 'react';
import "./Footer.css";
import Logo from "../../assets/doctorlogotipo.png";
import Whats from "../../assets/whats.png";
import Email from "../../assets/iconeemail.png";
import Mao from "../../assets/iconeazul.png";
import Visto from "../../assets/iconevisto.png";


const Footer = () => {


  return (
    <div className='content'>

      <br /><br />
      <br /><br />

      <div className='container grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 p-5 mt-10'>

        <div className='text-center justify-center'>
          <img src={Logo} alt="" />
          <h2 className='w-[300px] text-white text-left font-semibold mt-5'>
            
            A doc4U oferece consultas online acessíveis representando a essência da revolução digital na saúde. Estamos comprometidos em proporcionar uma experiência eficiente e avançada para pacientes em todo o país. Na doc4U estamos redefinindo a maneira como as pessoas acessam e vivenciam os cuidados com a saúde.
          </h2>

          <div className='flex items-center pt-10 pb-1'>

            <img src={Visto} alt="" />

            <h2 className='w-[300px] text-white text-left font-semibold ml-1'>Termos de uso</h2>
            

          </div>

          <div className='flex items-center pt-1'>

            <img src={Visto} alt="" />

            <h2 className='w-[300px] text-white text-left font-semibold ml-1'>Política de privacidade</h2>
            

          </div>
        </div>

        <div className='text-center justify-center'>
          <h1 className='text-left text-white text-2xl sm:2xl lg:4xl  font-bold pb-5'>Informações de Contato</h1>
          <button className='flex text-white items-center text-1xl font-bold bg-green rounded-full w-[60%] p-3 uppercase hover:scale-[10px] duration-[100ms]'>
            <img src={Whats} alt="" />
            <div className='flex flex-col ml-2'>
              <span className="text-left text-white font-semibold text-[9px]">Atendimento doc4u <span className="text-left text-whiteLight font-semibold text-[9px] opacity-90 bg-bgLight p-[2px] rounded-[3px]">Online</span> </span>
              <span className="text-left font-bold text-[12px]">Falar com o atendimento</span>
            </div>

          </button>

          <br />
          <div className='flex items-center'>

            <img src={Email} alt="" />

            <h2 className='w-[300px] text-white text-left font-semibold ml-1'>sac@doc4U.com.br</h2>
          </div>

          <br />

          <h2 className='text-left text-white text-[22px] sm:[20px] lg:4xl  font-bold pb-5'>Horário de atendimento Comercial:</h2>

          <div className='flex items-center pt-10 pb-10'>

            <img src={Mao} alt="" />
            <h2 className='w-[300px] text-white text-left font-semibold ml-1'>Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto Feriados</h2>
          </div>




        </div>



    
    
      <div className='text-center justify-center'>
          <div className='form-container'>
            <form className='form'>
              <div className="form-group text-left">
                <label htmlFor="fullname" className='text-white'>*Nome</label>
                <input
                  id="fullname"
                  name='fullname'
                  type='text'
                  className='form-control'

                />
              </div>

              <div className="form-group text-left">
                <label htmlFor="username" className='text-white'>*Email</label>
                <input
                  id="username"
                  name='username'
                  type='text'
                  className='form-control emailfooter'
                  placeholder='emal usado no cadastramento/pagamento'
                />
              </div>


              <div className="form-group text-left">
                <label htmlFor="assunto" className='text-white'>Assunto</label>
                <select className='form-control select text-[14px] text-blackWhite' name="assunto" id="">
                  <option value="selecione" selected >--- Selecione ---</option>
                  <option value="Imprevisto">Dúvidas</option>
                  <option value="Imprevisto">Sugestões</option>
                  <option value="Imprevisto">Financeiro</option>
                  <option value="Imprevisto">Rescisão</option>
                </select>
              </div>

              <div className="form-group text-left">

                <label htmlFor="assunto" className='text-white'>*Solicitação:</label>
                <textarea id="story" name="story" className='w-full textlabel rounded-[3px]' rows="4" placeholder='como podemos ajudar você ?'>
                </textarea>

              </div>


              <div className='form-group button-group'>

                <button type='submit' className='submit-button font-bold'>

                  Enviar Solicitação

                </button>



              </div>

            </form>

          </div>
        </div>
    


      

        

      </div>

    </div>


  )
}



export default Footer;



