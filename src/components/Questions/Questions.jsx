import React from 'react';
import Acordeon from './Acordeon';

const Questions = () => {
  return (
    <div className='container'>

<h1 className='text-4xl text-blackWhite font-bold justfy-start pb-[40px] pt-[35px]'>Perguntas Frequentes</h1>

      <div className='grid grd-cols-2 md:grid-cols-2 gap-8'>

      
    <div>
    <Acordeon title="O que é a Telemedicina doc4U?" subTitle="É um pronto atendimento digital que disponibiliza consultas com médicos à distância. O serviço pode ser usado em situações de baixa e média complexidade. Para casos graves, procure imediatamente um hospital para o atendimento adequado."/>
    </div>
    
      <div>
      <Acordeon title="Como será marcada a consulta com o Médico Especialista?" subTitle="Após o clínico encaminhar o paciente para um médico especialista (Cardiologia, Dermatologia, Pediatria, Endocrinologia, Geriatria, Ginecologia, Neurologia, Psiquiatria, Traumatologia e Otorrinolaringologia) a marcação se dará em até 2 dias úteis. Esta marcação obedecera à disponibilidade da agenda do médico especialista. Solicite o agendamento CLICANDO AQUI. Horário de atendimento - Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto Feriados."/>

      </div>
      <div>
      <Acordeon title="Qual o tempo de espera para ser atendido?" subTitle="O início do pronto atendimento pode levar em média 15 minutos. Mas, normalmente ocorre muito mais rápido. No período noturno e finais de semana, o tempo de resposta poderá ser maior que o habitual."/>
    </div>
    <div>
    <Acordeon title="O que é a Telepsicologia doc4U?" subTitle="É um atendimento digital que disponibiliza consultas com psicólogos à distância. É um atendimento que promove o cuidado com a saúde mental/emocional. O atendimento é semelhante ao realizado presencialmente."/>

    </div>
    <div>
    <Acordeon title="Quem são considerados meus dependentes?" subTitle="Ampliamos a definição de família para incluir até o segundo grau de parentesco, cobrindo cônjuges, filhos, pais, avós. Nossa abordagem abrangente cuida de todos que são importantes para você."/>

    </div>
      <div>
      <Acordeon title="Como funciona a Telepsicologia?" subTitle="Você e sua família têm direito a um total de 4 consultas mensais com um(a) psicólogo(a) (são 4 consultas por mês distribuídas entre o titular e seus dependentes e não 4 consultas por cada pessoa) , com duração de até 40 minutos cada. Esse apoio profissional está disponível para todos (titular e dependentes), pois acreditamos que todos merecem bem-estar emocional. A marcação se dará em até 2 dias úteis. Esta marcação obedecera à disponibilidade da agenda do(a) psicólogo(a). Solicite o agendamento CLICANDO AQUI. Horário de atendimento - Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto Feriados."/>

      </div>
    <div>
    <Acordeon title="Consigo fazer acompanhamento de doenças crônicas?" subTitle="Doenças crônicas não devem controlar sua vida, e sim ser controladas por você. Nossos médicos estão prontos para fornecer o acompanhamento necessário, emitir receitas para diferentes situações, desde medicamentos comuns até os de controle especial (exceto receita azul e amarela), além de atestados e até solicitação de exames. Sua saúde está em boas mãos!"/>

    </div>
     
     <div>
     <Acordeon title="Como funciona a consulta com Nutricionista?" subTitle="Você e cada um dos seus dependentes terão direito a marcar uma consulta com um(a) nutricionista a cada 90 dias. A marcação se dará em até 2 dias úteis. Esta marcação obedecerá à disponibilidade da agenda do(a) nutricionista. Solicite o agendamento CLICANDO AQUI. Horário de atendimento - Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto Feriados."/>

     </div>

     <div>
     <Acordeon title="Se eu não comparecer a uma Consulta?" subTitle="Caso você ou qualquer dos seus dependentes não comparecer a uma consulta, tal consulta será dada como realizada e não haverá remarcação."/>

     </div>

     <div>
     <Acordeon title="Existe limite de idade?" subTitle="Sem restrições de idade, nossos serviços foram pensados para atender a todas as faixas etárias, desde os pequenos até os mais experientes. Todos merecem o cuidado dedicado e compassivo que oferecemos. Sem nenhum custo extra em nenhuma idade."/>

     </div>

      


      </div>

      
      <br />
      <br />
      
    </div>
  )
}


export default Questions;
