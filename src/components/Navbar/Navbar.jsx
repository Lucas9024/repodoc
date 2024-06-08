import { useState } from 'react';
import Logo from "../../assets/doctor.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import Beneficio from '../Beneficio/Beneficio';
import Topo from '../Topo/Topo';

const navlinks = [
  {
    title: "Início",
    href: "inicio",
  },
  {
    title: "Conheça",
    href: "conheca",
  },
  {
    title: "Plano",
    href: "plano",
  },
  {
    title: "Especialidades",
    href: "especialidades",
  },
  {
    title: "Contato",
    href: "contato",
  },
  {
    title: "Minha Conta",
    href: "minhaconta",
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open)
  }

  return (
    <div className='bg-whiteLight shadow z-[20] sticky top-0'>
      <Beneficio />
      <Topo />

      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-around gap-8 p-10 h-16'>
          <div className='flex items-center'>
            <img src={Logo} alt="" />
          </div>

          {/* Links de Navegação */}
          <div className='hidden md:block'>
            <div className='ml-10 flex space-x-4'>
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-200} // Ajuste conforme necessário
                  className='text-primary font-semibold text-1xl hover:border-b-2 duration-100 cursor-pointer'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Botão de menu hamburguer */}
          <div className='-mr-2 flex md:hidden'>
            <button type='button' onClick={handleMenu}
                    className='inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-black focus:ring-offset-white'>
              <span className='sr-only'>Open Main Menu</span>
              {open == true ? <FaTimes className='text-primary w-8 h-8'/> : <FaBars className='text-primary w-8 h-8'/>}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className='md:hidden duration-[450ms]'>
          <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3 grid grid-cols-1 '>
            {navlinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-200} // Ajuste conforme necessário
                className='text-primary font-semibold text-1xl hover:border-b-2 duration-100 cursor-pointer'
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
