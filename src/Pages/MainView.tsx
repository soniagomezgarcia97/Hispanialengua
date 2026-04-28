/* Importaciones */
import { Link } from "react-router-dom"
import Carrousel from "../components/Carrousel"

const MainView = () => {
    return (
        <>
            {/* Container */}
            <div className="grid grid-cols-5">
                <aside className="col-span-1 bg-red-400 h-screen p-10 flex flex-col gap-6">
                    {/* Logo */}
                    <div className="bg-blue-300 flex flex-row justify-start items-center gap-2.5">
                        <div className="bg-blue-700 w-10 h-10"></div>
                        <h1 className="font-bold">Hispanialengua</h1>
                    </div>
                    {/* Menu */}
                    <ul className="bg-orange-300 flex flex-col justify-center items-start gap-8">
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
                <main className="col-span-4 p-7 bg-yellow-200">
                    <h2 className="text-5xl mb-9">Bienvenidos a <span className="font-bold">Hispanialengua</span></h2>
                    <div className="bg-red-200 h-[50%] flex flex-row justify-center items-end p-10 mb-10 bg-[url('/ImagesMain/hispanialengua.webp')] bg-no-repeat bg-cover bg-center">
                        <p className="text-2xl text-center w-[80%] text-white">Mi tierra natal, Salamanca (Castilla y León), también llamada: «Roma la chica», tiene
                            algo especial: su luz, sus piedras, su noble gente...</p>
                    </div>
                    {/* Carrouseles */}
                    <div className="bg-green-300 h-[35%] grid grid-cols-2 gap-10 px-4">
                        {/* Educativo */}
                        <Carrousel secciones={[
                            {"nombre": "Cápsulas", "imagen": "/ImagesMain/capsulas.webp", "ruta": "/capsulas"},
                            {"nombre": "Paremias", "imagen": "/ImagesMain/paremias.webp", "ruta": "/paremias"},
                            {"nombre": "Español vivo", "imagen": "/ImagesMain/español_vivo.webp", "ruta": "espanol-vivo"},
                            {"nombre": "Trabalenguas", "imagen": "/ImagesMain/trabalenguas.webp", "ruta": "/trabalenguas"},
                            {"nombre": "Juegos", "imagen": "/ImagesMain/juegos.webp", "ruta": "/juegos"}
                        ]} />
                        {/* Curiosidades */}
                        <Carrousel secciones={[
                            {"nombre": "Cortos", "imagen": "/ImagesMain/cortos.webp", "ruta": "cortos"},
                            {"nombre": "Cultura", "imagen": "/ImagesMain/cultura.webp", "ruta": "cultura"},
                            {"nombre": "Música", "imagen": "/ImagesMain/musica.webp", "ruta": "musica"},
                            {"nombre": "Comarca", "imagen": "/ImagesMain/nuestra_comarca.webp", "ruta": "comarca"},
                            {"nombre": "Sobre nosotros", "imagen": "/ImagesMain/sobre_nosotros.webp", "ruta": "sobre-nosotros"}
                        ]} />
                    </div>
                </main>
            </div>
        </>
    )
}

export default MainView
