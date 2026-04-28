/* Importaciones */
import { Link } from "react-router-dom"
import Carrousel from "../components/Carrousel"

const MainView = () => {
    const base = import.meta.env.BASE_URL
    return (
        <>
            {/* Container */}
            <div className="grid grid-cols-5 bg-[#1c1a16]">
                <aside className="col-span-1 bg-[#0f0e0b] h-screen p-10 flex flex-col gap-6">
                    {/* Logo */}
                    <div className="flex flex-row justify-start items-center gap-2.5">
                        <div className="bg-yellow-500 w-10 h-10"></div>
                        <h1 className="font-bold text-white text-2xl">Hispanialengua</h1>
                    </div>
                    {/* Menu */}
                    <ul className="flex flex-col justify-center items-start gap-8 text-white">
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
                <main className="col-span-4 p-7">
                    <h2 className="text-5xl mb-9 text-white">Bienvenidos a <span className="font-bold">Hispanialengua</span></h2>
                    <div className="h-[50%] flex flex-row justify-center items-end p-5 mb-10 bg-no-repeat bg-cover bg-center shadow-lg shadow-black/50 ring-1 ring-white/10" style={{backgroundImage: `url(${base}ImagesMain/hispanialengua.webp)`}}>
                        <p className="text-2xl text-center w-[80%] text-white drop-shadow-lg">Mi tierra natal, Salamanca (Castilla y León), también llamada: «Roma la chica», tiene
                            algo especial: su luz, sus piedras, su noble gente...</p>
                    </div>
                    {/* Carrouseles */}
                    <div className="h-[35%] grid grid-cols-2 gap-10 px-4">
                        {/* Educativo */}
                        <Carrousel secciones={[
                            {"nombre": "Cápsulas", "imagen": `${base}ImagesMain/capsulas.webp`, "ruta": "/capsulas"},
                            {"nombre": "Paremias", "imagen": `${base}ImagesMain/paremias.webp`, "ruta": "/paremias"},
                            {"nombre": "Español vivo", "imagen": `${base}ImagesMain/español_vivo.webp`, "ruta": "/espanol-vivo"},
                            {"nombre": "Trabalenguas", "imagen": `${base}ImagesMain/trabalenguas.webp`, "ruta": "/trabalenguas"},
                            {"nombre": "Juegos", "imagen": `${base}ImagesMain/juegos.webp`, "ruta": "/juegos"}
                        ]} />
                        {/* Curiosidades */}
                        <Carrousel secciones={[
                            {"nombre": "Cortos", "imagen": `${base}ImagesMain/cortos.webp`, "ruta": "/cortos"},
                            {"nombre": "Cultura", "imagen": `${base}ImagesMain/cultura.webp`, "ruta": "/cultura"},
                            {"nombre": "Música", "imagen": `${base}ImagesMain/musica.webp`, "ruta": "/musica"},
                            {"nombre": "Comarca", "imagen": `${base}ImagesMain/nuestra_comarca.webp`, "ruta": "/comarca"},
                            {"nombre": "Sobre nosotros", "imagen": `${base}ImagesMain/sobre_nosotros.webp`, "ruta": "/sobre-nosotros"}
                        ]} />
                    </div>
                </main>
            </div>
        </>
    )
}

export default MainView
