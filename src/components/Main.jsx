import { motion } from "motion/react"

import libroTematicas from '../assets/libroTematicas2.png';
import { publishersImg } from '../constants/publishersImg';

const Main = () => {
  return (
    <main className="flex flex-wrap flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 lg:mt-auto lg:mb-auto">
        <p className="roboto text-center text-2xl lg:text-5xl text-fuchsia-900">Vuela entre las páginas de tus libros favoritos con la <span className="text-red-500">Libro</span><span className="text-yellow-500">Teca</span></p>
        <p className="text-center text-xl lg:text-3xl">¿Qué estas esperando?</p>
        
        <div className="flex justify-center m-2">
          <a href="/" className="text-lg font-extralight tracking-widest px-5 py-3.25 outline-none border border-black cursor-pointer 
        relative mx-auto bg-transparent select-none touch-manipulation
        hover:font-bold hover:text-emerald-950
        after:content-[''] after:bg-yellow-300 after:absolute after:w-full after:h-full after:top-1.75 after:left-1.75 
        after:z-[-1] after:transition-all after:duration-200 hover:after:top-0 hover:after:left-0 md:px-12">Ingresar</a>  
        </div>
        

      </div>
      <div className="w-full flex justify-center lg:w-1/2">
        <motion.img drag whileDrag={{scale: 0.7}} dragConstraints={{top: -50, left:-50, right:50, bottom: 50}} dragMomentum={false} 
        src={libroTematicas} alt="imagen de un libro con elementos"/>
        {//<img src={libroTematicas} alt="imagen de un libro con elementos" />
        }
      </div>
      <div className='w-full bg-white flex flex-wrap justify-center'>
        {publishersImg.map(item => <img key={item.id} alt={item.alt} src={item.link} style={{width: "200px", height: "100px"}}/>)}
      </div>
    </main>
  )
}

export default Main;