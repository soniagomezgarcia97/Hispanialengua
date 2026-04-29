/* Importaciones */
import { Link } from "react-router-dom"
import Carrousel from "../components/Carrousel"
import { useState } from "react"

const MainView = () => {
    const base = import.meta.env.BASE_URL
    /* Funcion menu desplegable */
    const [menuDesplegable, setMenuDesplegable] = useState(false)
    return (
        <>
            {/* Container */}
            <div className="content-start grid grid-cols-1 lg:grid-cols-6 bg-[#1c1a16] min-h-screen">
                {/* Menu aside */}
                <aside className="col-span-1 bg-[#0f0e0b] lg:h-screen p-10 flex flex-col gap-6 self-start lg:col-span-2">
                    <div className="flex flex-row justify-between items-center">
                        {/* Logo */}
                        <div className="flex flex-row justify-start items-center gap-2.5">
                            <div className="bg-yellow-500 w-10 h-10"></div>
                            <h1 className="font-bold text-white text-2xl">Hispanialengua</h1>
                        </div>
                        {/* Boton menu */}
                        <button className="lg:hidden w-10 h-10" onClick={() => { setMenuDesplegable(!menuDesplegable) }}>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                            </svg>
                        </button>
                    </div>
                    {/* Menu */}
                    <ul className={`text-white ml-[20%] lg:flex flex-col justify-center items-start gap-8 ${menuDesplegable ? "flex flex-col justify-center items-start gap-8" : "hidden"}`}>
                        <li><Link to={"/capsulas"}>Cápsulas</Link></li>
                        <li><Link to={"/paremias"}>Paremias</Link></li>
                        <li><Link to={"/espanol-vivo"}>Español vivo</Link></li>
                        <li><Link to={"/juegos"}>Juegos</Link></li>
                        <li><Link to={"/trabalenguas"}>Trabalenguas</Link></li>
                        <li><Link to={"/cortos"}>Cortos</Link></li>
                        <li><Link to={"/cultura"}>Cultura</Link></li>
                        <li><Link to={"/musica"}>Música</Link></li>
                        <li><Link to={"/comarca"}>Comarca</Link></li>
                        <li><Link to={"/sobre-nosotros"}>Sobre nosotros</Link></li>
                    </ul>
                </aside>
                {/* Main */}
                <main className="md:h-screen lg:col-span-4 p-7 pb-20">
                    <h2 className="text-3xl lg:text-5xl mb-9 text-white">Bienvenidos a <span className="font-bold">Hispanialengua</span></h2>
                    <div className="h-48 md:h-[50%] flex flex-row justify-center items-end p-5 mb-10 bg-no-repeat bg-cover bg-center shadow-lg shadow-black/50 ring-1 ring-white/10" style={{ backgroundImage: `url(${base}ImagesMain/hispanialengua.webp)` }}>
                        <p className="text-1xl lg:text-2xl text-center lg:w-[80%] text-white drop-shadow-lg">Mi tierra natal, Salamanca (Castilla y León), también llamada: «Roma la chica», tiene
                            algo especial: su luz, sus piedras, su noble gente...</p>
                    </div>
                    {/* Carrouseles */}
                    <div className="h-72 lg:h-[35%] grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                        {/* Educativo */}
                        <Carrousel secciones={[
                            { "nombre": "Cápsulas", "imagen": `${base}ImagesMain/capsulas.webp`, "ruta": "/capsulas" },
                            { "nombre": "Paremias", "imagen": `${base}ImagesMain/paremias.webp`, "ruta": "/paremias" },
                            { "nombre": "Español vivo", "imagen": `${base}ImagesMain/español_vivo.webp`, "ruta": "/espanol-vivo" },
                            { "nombre": "Trabalenguas", "imagen": `${base}ImagesMain/trabalenguas.webp`, "ruta": "/trabalenguas" },
                            { "nombre": "Juegos", "imagen": `${base}ImagesMain/juegos.webp`, "ruta": "/juegos" }
                        ]} />
                        {/* Curiosidades */}
                        <Carrousel secciones={[
                            { "nombre": "Cortos", "imagen": `${base}ImagesMain/cortos.webp`, "ruta": "/cortos" },
                            { "nombre": "Cultura", "imagen": `${base}ImagesMain/cultura.webp`, "ruta": "/cultura" },
                            { "nombre": "Música", "imagen": `${base}ImagesMain/musica.webp`, "ruta": "/musica" },
                            { "nombre": "Comarca", "imagen": `${base}ImagesMain/nuestra_comarca.webp`, "ruta": "/comarca" },
                            { "nombre": "Sobre nosotros", "imagen": `${base}ImagesMain/sobre_nosotros.webp`, "ruta": "/sobre-nosotros" }
                        ]} />
                    </div>
                </main>
            </div>
        </>
    )
}

export default MainView
