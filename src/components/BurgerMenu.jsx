import { useState } from "react";
import { navbarLinks } from "../constants/navbarLinks";

const BurgerMenu = ({isLogged, logInAndLogOut}) => {

    //El estado para saber si menu hamburguesa para moviles está abierto o no
    const [isOpen, setIsOpen] = useState(false);
    //Estados para controlar animaciones del burger-menu-button 
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [isMenuClicked , setIsMenuClicked] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
        } else {
            setBurgerClass('burger-bar unclicked');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const doBothChangesFunction = () => {
        //Despliega o repliega el menú para moviles
        toggleMenu();
        //Activa animación relacionada al burger-menu-button 
        updateMenu();
    }

    return (
        <div className="relative mx-2">
            <div className='h-full w-16 relative z-50 flex flex-col items-start justify-between lg:hidden' 
            onClick={doBothChangesFunction}>
                <div className={`w-16 h-2 bg-cyan-400 rounded-full my-[0.3em] mb-1 mx-0 box-border ${burgerClass}`}></div>
                <div className={`w-16 h-2 bg-cyan-400 rounded-full my-[0.3em] mb-1 mx-0 box-border ${burgerClass}`}></div>
                <div className={`w-16 h-2 bg-cyan-400 rounded-full my-[0.3em] mb-1 mx-0 box-border ${burgerClass}`}></div>
            </div>

            <div className={`fixed top-0 right-0 h-full w-64 bg-sky-700 shadow-lg transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-45`}>
                
                <div className="flex justify-end p-4">

                </div>
                <ul className="text-white flex flex-col items-center justify-center space-y-6 mt-6">
                    {navbarLinks.map(link => <li key={link.id} className="text-lg text-white cursor-pointer pb-1.5 transition hover:font-bold">
                                                    <a src={link.link} >{link.title}</a>
                                                </li>    )
                    }  
                </ul>
                <div className="flex flex-col items-center justify-center mt-6">
                    {//renderización condicional
                    }
                    {isLogged ? <div className={`bg-red-700 text-white mx-2 inline-flex rounded-[100px] items-center justify-center cursor-pointer 
                    text-base text-center min-h-10 overflow-hidden px-5 hover:bg-white hover:text-red-700`} onClick={logInAndLogOut}>
                        {/*<a href="/"><i className="bi bi-person-square"></i> Cerrar Sesión </a>*/}
                        <i className="bi bi-person-square"></i><span className='mx-1'>Cerrar Sesión</span> 
                    </div> : 
                    <div className={`bg-black text-white mx-2 inline-flex rounded-[100px] items-center justify-center cursor-pointer 
                    text-base text-center min-h-10 overflow-hidden px-5 hover:bg-white hover:text-black`} onClick={logInAndLogOut}>
                        {/*<a href="/"><i className="bi bi-person-add"></i> Login</a> */}
                        <i className="bi bi-person-add"></i><span className='mx-1'>Login</span>
                    </div>
                    }
                </div>
                
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={doBothChangesFunction}></div>
            )}
        </div>
    )
}

export default BurgerMenu;