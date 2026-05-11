/* Importaciones */
import { useState } from "react"
import { Link } from "react-router-dom"
import ParemiasComp from "../components/Paremias"

const Paremias = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false)
  const [dichos, setDichos] = useState(true)
  const [refranes, setRefranes] = useState(false)
  const paremiasDatos = [
    { urlImagen: "Imagesdichos/cria_fama.webp", dicho: "«Cría fama y échate a dormir»" },
    { urlImagen: "Imagesdichos/ojo_amo_caballo.webp", dicho: "«El ojo del amo engorda al caballo»" },
    { urlImagen: "Imagesdichos/buen_entendedor.webp", dicho: "«A buen entendedor pocas palabras bastan»" },
    { urlImagen: "Imagesdichos/perro_flaco.webp", dicho: "«A perro flaco todo son pulgas»" },
    { urlImagen: "Imagesdichos/dicho_hecho.webp", dicho: "«Del dicho al hecho hay mucho trecho»" },
    { urlImagen: "Imagesdichos/san_pedro.webp", dicho: "«A quien Dios se la dé, San pedro se la bendiga»" },
    { urlImagen: "Imagesdichos/cesto_cientos.webp", dicho: "«Quien hace un cesto hace ciento»" },
    { urlImagen: "Imagesdichos/col_lechuga.webp", dicho: "«Entre col y col, lechuga»" },
    { urlImagen: "Imagesdichos/caer_burro.webp", dicho: "«Poner a alguien a bajar (caer) de un burro»" },
    { urlImagen: "Imagesdichos/boca_cerrada.webp", dicho: "«En boca cerrada no entran moscas»" },
    { urlImagen: "Imagesdichos/febrero_humero.webp", dicho: "«'En febrero un rato al sol y otro al humero' y 'En febrero saca la lengua el perro'.»" },
    { urlImagen: "Imagesdichos/dios_rogando.webp", dicho: "«A Dios rogando y con el mazo dando»" },
    { urlImagen: "Imagesdichos/digo_diego.webp", dicho: "«Donde dije digo, digo Diego»" },
    { urlImagen: "Imagesdichos/tirar_la_toalla.webp", dicho: "«Tirar la toalla»" },
    { urlImagen: "Imagesdichos/madrugar.webp", dicho: "«No por mucho madrugar amanece más temprano»" },
    { urlImagen: "Imagesdichos/ciego.webp", dicho: "«No hay peor ciego que el que no quiere ver»" },
    { urlImagen: "Imagesdichos/trapo.webp", dicho: "«Poner a alguien como un trapo»" },
    { urlImagen: "Imagesdichos/pajaro_en_mano.webp", dicho: "«Más vale pájaro en mano que ciento volando»" },
    { urlImagen: "Imagesdichos/mal_tiempo_buena_cara.webp", dicho: "«Al mal tiempo, buena cara»" },
    { urlImagen: "Imagesdichos/perro_ladrador.webp", dicho: "«Perro ladrador, poco mordedor.»" }
  ]
  return (
    /* Container */
    <div className="w-full h-screen flex flex-col bg-[#0f0e0b]">
      <header className="w-full col-span-1 p-10 flex flex-col gap-6 self-start xl:col-span-1 xl:flex-row xl:justify-between xl:items-center">
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
        <ul className={`text-white ml-[20%] lg:flex lg:flex-row lg:ml-0 justify-center items-start gap-8 ${menuDesplegable ? "flex flex-col justify-center items-start gap-8" : "hidden"}`}>
          <li><Link to={"/capsulas"}>Cápsulas</Link></li>
          <li><Link to={"/paremias"}>Paremias</Link></li>
          <li><Link to={"/espanol-vivo"}>Español vivo</Link></li>
          <li><Link to={"/juegos"}>Juegos</Link></li>
          <li className="text-yellow-500"><Link to={"/trabalenguas"}>Trabalenguas</Link></li>
          <li><Link to={"/cortos"}>Cortos</Link></li>
          <li><Link to={"/cultura"}>Cultura</Link></li>
          <li><Link to={"/musica"}>Música</Link></li>
          <li><Link to={"/comarca"}>Comarca</Link></li>
          <li><Link to={"/sobre-nosotros"}>Sobre nosotros</Link></li>
          <li><Link to={"/"}>Home</Link></li>
        </ul>
      </header>
      <main className="w-full flex-1 flex flex-col">
        {/* Botones */}
        <div className="w-fit mx-auto bg-white/80 flex flex-row justify-center items-center text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] rounded-md backdrop-blur-sm font-bold mb-8">
          <button className={`text-[#0f0e0b] px-3 py-1 rounded-tl-lg rounded-bl-lg ${dichos ? "bg-amber-500" : ""}`} onClick={() => {
            setDichos(true)
            setRefranes(false)
          }}>Dichos</button>
          <button className={`text-[#0f0e0b] px-3 py-1 rounded-tr-lg rounded-br-lg ${refranes ? "bg-yellow-500" : ""}`} onClick={() => {
            setRefranes(true)
            setDichos(false)
          }}>Refranes</button>
        </div>
        {/* Container paremias */}
        <div className="flex flex-col flex-1">
          {/* Dichos */}
          <article className={`w-full flex-1 flex flex-col text-2xl text-white ${dichos ? "block" : "hidden"}`}><ParemiasComp paremias={paremiasDatos} titulo="Dichos" /></article>
          {/* Refranes */}
          <article className={`w-full flex-1 bg-blue-300 text-2xl text-white ${refranes ? "block" : "hidden"}`}>refranes</article>
        </div>
      </main>
    </div>
  )
}

export default Paremias