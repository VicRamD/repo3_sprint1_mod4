const Footer = () => {

    const nombreAutor = "Víctor Francisco Ramirez Diaz";

  return (
    <footer className="p-5 mt-auto bg-blue-900 flex flex-col justify-center lg:flex-row lg:justify-around"> 
      <p className="text-center text-white">Hecho con React por {nombreAutor}</p>
      <div className="flex justify-center">
        <a href="https://www.facebook.com/?locale=es_LA" target="_blank" className="mx-2"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/" target="_blank" className="mx-2"><i className="bi bi-instagram"></i></a>
        
      </div>
    </footer>  
  )
}

export default Footer;