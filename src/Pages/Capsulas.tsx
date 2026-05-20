/* Importaciones */

import { useState } from "react"
import { Link } from "react-router-dom"
import CapsulasComp from "../components/Capsulas"

const Capsulas = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false)
  const capsulasDatos = [
    {
      palabra: "primavera",
      etimologia: "Del latín PRIMA VERA ('primer verdor'). Se compone de primus (primero) y ver (primavera). En la antigua Roma marcaba el inicio del bloque cálido del año. Su origen real se vincula a la luz y al resplandor solar que hace renacer la naturaleza, por lo que no tiene ninguna relación etimológica con la palabra 'verdad'."
    },
    {
      palabra: "vino",
      etimologia: "Del latín VINUM, cuyo origen más remoto está en una raíz indoeuropea que significa 'girar', 'trenzar' o 'enroscarse'. Esto se debe a una lógica visual de los pueblos antiguos: la palabra hace referencia directa a la vid, una planta trepadora cuyos sarmientos se enroscan y giran sobre sí mismos mientras crecen."
    },
    {
      palabra: "bodega",
      etimologia: "Del griego APOTHÉKE ('almacén' o 'depósito'). Los romanos adoptaron el término en el latín vulgar como apoteca y con los siglos evolucionó en español a bodega, especializándose en el sector del vino. Curiosamente, la misma palabra griega llegó por una vía más culta para darnos el término 'botica' (farmacia)."
    },
    {
      palabra: "caña",
      etimologia: "Del latín CANNA (del griego KANNA, tomado de lenguas semíticas como el hebreo qāneh), que aludía a los juncos de río. Al ser un tallo recto y hueco, se usó desde la antigüedad para medir. De esa idea de cilindro hueco derivan palabras actuales como canal, cañón y canon (que originalmente era una vara de medición)."
    },
    {
      palabra: "feria",
      etimologia: "Del latín FERIA ('día de fiesta' o 'descanso'). En Roma eran días sagrados dedicados a los dioses en los que no se trabajaba. Debido a que las festividades reunían a grandes multitudes de ciudadanos, los comerciantes locales aprovecharon el espacio para vender sus productos, transformando el día sagrado en el mercado popular de hoy."
    },
    {
      palabra: "malversación",
      etimologia: "Del latín MALVERSATIO, compuesto por male ('mal') y versare ('manejar', 'girar' o 'administrar'). Originalmente versare aludía a guiar el ganado, pero pasó a significar la gestión de negocios. Etimológicamente es un 'mal manejo' de bienes, término que hoy se especializa en el desvío indebido de dinero, sobre todo fondos públicos."
    },
    {
      palabra: "cuñado",
      etimologia: "Del latín COGNATUS ('nacidos de la misma sangre'). En el derecho romano original designaba estrictamente a los parientes biológicos por línea materna. Sin embargo, en el castellano medieval la palabra sufrió un giro radical, dejando de usarse para la sangre y pasando a definir solo a la familia por afinidad política (hermanos del cónyuge)."
    },
    {
      palabra: "abuelo",
      etimologia: "Del latín vulgar AVIOLUS, un diminutivo cariñoso del latín clásico AVUS ('abuelo') que se traducía literalmente como 'abuelito'. Su raíz indoeuropea original (*awo-) significaba 'adulto protector'. De esta misma raíz latina conservamos términos muy específicos de nuestro idioma como atávico (antepasados) o avuncular (relativo a los tíos)."
    },
    {
      palabra: "mortificarse",
      etimologia: "Del latín MORTIFICARE, unión de mors ('muerte') y facere ('hacer'). Su significado primitivo era 'dar muerte' o 'destruir' (usado en medicina antigua para tejidos gangrenados). Con los siglos, el término abandonó el plano puramente físico o corporal y se trasladó al plano psicológico para describir el sufrimiento, la culpa o la preocupación mental."
    },
    {
      palabra: "familia",
      etimologia: "Del latín FAMILIA, que a su vez deriva de famulus ('sirviente' o 'esclavo'). En la antigua Roma este concepto no designaba un vínculo de amor o sangre, sino al conjunto de propiedades, criados y esclavos bajo el patrimonio del jefe de la casa (pater familias). Con el tiempo y la influencia social, el término evolucionó hacia el núcleo afectivo actual."
    }
  ]
  return (
    <>
      {/* Container */}
      <div className="w-full flex flex-col bg-[#0f0e0b]">
        {/* Header */}
        <header className="w-full col-span-1 p-10 flex flex-col gap-6 self-start xl:col-span-1 xl:flex-row xl:justify-between xl:items-center">
          <div className="flex flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex flex-row justify-start items-center gap-2.5">
              <div className="bg-yellow-500 w-10 h-10"></div>
              <h1 className="font-bold text-white text-2xl">Hispanialengua</h1>
            </div>
            {/* Boton menu */}
            <button className="lg:hidden w-10 h-10" onClick={() => { setMenuDesplegable(!menuDesplegable) }} title="abrir menu">
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
        {/* Main */}
        <main className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-5 auto-rows-[350px] pb-32 lg:pb-5">
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[0]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[1]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[2]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[3]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[4]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[5]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[6]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[7]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[8]} /></article>
          <article className="w-full h-full"><CapsulasComp etimologias={capsulasDatos[9]} /></article>
        </main>
      </div>
    </>
  )
}

export default Capsulas