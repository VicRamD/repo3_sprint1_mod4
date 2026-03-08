//import {useState} from 'react'
import logo from '../assets/logoLibros.png'
import BurgerMenu from './BurgerMenu';
import { navbarLinks } from '../constants/navbarLinks';

const Navbar = () => {

  const isLogged = true;

  return (
    <nav className='flex items-center justify-between w-full h-[5em] bg-cyan-950 mx-auto z-30 py-5 px-6 lg:px-20 2xl:px-0'>
        <a href="/">
            <img src={logo} alt="logo libroteca" style={{width: '90px', height: '40px'}}/>
        </a>
        {/*navegación en desktop*/}
        <ul className="hidden h-full gap-12 lg:flex">
          {navbarLinks.map(link => <li key={link.id} className=" text-white text-lg cursor-pointer pb-1.5 transition-all hover:font-bold">
                                <a src={link.link} >{link.title}</a>
                            </li>    )
          }          
        </ul>

        <div className='flex flex-row justify-between'>
          <div className='bg-black text-white mx-2 inline-flex rounded-[100px] items-center justify-center cursor-pointer 
          text-base text-center min-h-10 overflow-hidden px-5 hover:bg-white hover:text-black'>
            {isLogged ? <a href="/"><i className="bi bi-person-square"></i> Nombre </a> : <a href="/"><i className="bi bi-person-add"></i> Login</a>}
            
          </div>

          <div className=' bg-blue-900 w-12 h-12 p-2 mx-2 text-green-300 rounded-full flex items-center justify-center border-2 border-white
          hover:bg-white hover:text-green-600'>
            <a href="/" className='inline-block w-full h-full text-center'><i className="bi bi-basket2"></i></a>
          </div>
          {/*navegación en mobile*/}
          <BurgerMenu isLogged={isLogged}/>
        </div>
        
        
    </nav>
  )
}

export default Navbar;