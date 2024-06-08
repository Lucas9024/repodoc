import React, {useState} from 'react';
import Icone from "../../assets/questions/iconex.png";


const Acordeon = ({title, subTitle}) => {

    const [acordeonOpen, setAcordeonOpen] = useState(false);

  return (
    <div className='py-2 border-[1.5px] border-opacity-.9 border-gray px-2'>

        <button onClick={() => setAcordeonOpen(!acordeonOpen)} className='flex justify-between w-full'>
            <span className='text-[20px] font-bold text-blackLight'>{title} </span>
            {acordeonOpen ? <span className=' rounded-[100%] duration-[400ms]'><img src={Icone} alt="" /></span> : <span className='text-[35px] text-gray font-bold duration-[400ms]'>ˇ</span>}
        </button>


      <div className={`grid overflow-hidden transition-all duration-[400ms] ease-in-out text-slate-600 text-sm ${
        acordeonOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}>
        <div className='overflow-hidden p-2'>
        <h2 className=' text-blackWhite text-left text-[19px]  font-semibold p-1'> {subTitle}</h2>
          </div>
      </div>


    </div>

  )
}


export default Acordeon;


