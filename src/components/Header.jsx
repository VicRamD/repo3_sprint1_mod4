import Navbar from "./Navbar"
const Header = ({titlePart1, titlePart2}) => {
  return (
    <>
      <Navbar/>
      {titlePart1 && <h1 className="comic-relief text-4xl text-center my-2 text-red-600 lg:text-7xl">{titlePart1}<span className="text-yellow-300 text-shadow-lg/40">{titlePart2 ? titlePart2 : ''}</span></h1>}
    </>
  )
}

export default Header;