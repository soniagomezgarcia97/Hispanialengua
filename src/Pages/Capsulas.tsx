/* Importaciones */

import { useState } from "react"
import { Link } from "react-router-dom"
import CapsulasComp from "../components/Capsulas"

const Capsulas = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false)
  const capsulasDatos = [
    { palabra: "primavera", etimologia: "La palabra primavera nace del latín PRIMA VERA ('el primer verdor'). Se compone de primus (primero) y ver (primavera/estío). Su origen real se vincula a la luz y al resplandor solar que permite que las plantas renazcan. No tiene relación etimológica con la palabra 'verdad', sino con el ciclo solar y el despertar de la vegetación tras el invierno." },
    { palabra: "vino", etimologia: "La palabra vino proviene directamente del latín VINUM, término que compartían casi todos los pueblos del Mediterráneo antiguo y que dio origen a formas similares en otros idiomas, como vin en francés o wine en inglés. El origen más remoto de vinum se encuentra en una raíz indoeuropea (wei- o wei-no-), cuyo significado es 'girar', 'trenzar' o 'enroscarse'. Esto se debe a una lógica visual muy sencilla: la palabra hace referencia directa a la vid, una planta trepadora cuyos sarmientos se enroscan y giran sobre sí mismos mientras crecen. Así, el vino no se nombró originalmente por sus efectos o por su color, sino por la forma característica de la planta de la que nace." },
    { palabra: "bodega", etimologia: "El término bodega tiene un viaje lingüístico fascinante que proviene del griego APOTHÉKE, que significaba originalmente 'almacén', 'depósito' o 'lugar donde se guardan cosas' (formado por apo, 'fuera', y theke, 'caja' o 'depósito'). Los romanos adoptaron esta palabra en el latín vulgar como apoteca, manteniendo el sentido de almacén general. Con los siglos, la palabra evolucionó en español mediante cambios fonéticos naturales (la p pasó a b, la t a d y la c a g) hasta transformarse en bodega, especializándose con el tiempo en el almacenamiento de vino. Como dato curioso, la misma palabra griega llegó al español por otra vía más culta, dándonos el término botica (farmacia), que en el fondo comparte el mismo origen: un lugar donde se guardan y almacenan productos." },
    { palabra: "caña", etimologia: "La palabra caña proviene del latín CANNA, que a su vez fue un préstamo del griego KANNA (caña, junco). Sin embargo, el viaje de esta palabra es aún más antiguo, ya que los griegos la tomaron de las lenguas semíticas; en acadio se decía qanû y en hebreo qāneh, términos utilizados para referirse a los juncos que crecían en las orillas de los ríos. La característica principal de la caña —ser un tallo recto, cilíndrico y hueco— hizo que desde la antigüedad se utilizara como herramienta de medición. De hecho, de esta misma raíz nos han llegado palabras tan variadas como canal (un tubo largo y hueco), cañón (un cilindro hueco) y canon (que originalmente era una vara de medir y hoy significa 'regla' o 'modelo'). (Como guiño a nuestra cultura: de esa misma idea de 'tubo cilíndrico' viene que hoy en día llamemos 'caña' a ese vaso alargado de cerveza bien tirada)." },
    { palabra: "feria", etimologia: "La palabra feria proviene del latín FERIA (generalmente usada en plural, feriae), que significaba 'día de fiesta' o 'día de descanso'. En la antigua Roma, las feriae eran los días consagrados a los dioses en los que estaba prohibido trabajar y se realizaban celebraciones religiosas. Dado que en estos días festivos se reunían grandes multitudes en los pueblos y ciudades, los comerciantes aprovechaban la concentración de gente para vender sus productos. Así, con el paso de los siglos, la palabra cambió su significado estrictamente religioso para pasar a designar el gran mercado o fiesta popular que hoy conocemos. Como dato curioso, de esta misma raíz derivan palabras como feriado (día no laborable) y fiesta (a través del adjetivo latino festus)." },
    { palabra: "malversación", etimologia: "La palabra malversación proviene del latín MALVERSATIO, un término compuesto por dos elementos: el adverbio MALE (que significa 'mal') y el verbo VERSARE (que significa 'dar vueltas', 'manejar', 'girar' o 'administrar'). Originalmente, versare se usaba en contextos cotidianos como el pastoreo (hacer girar o guiar al ganado), pero con el tiempo pasó a significar el manejo o la gestión de los negocios y el dinero. Por lo tanto, etimológicamente, malversar significa literalmente 'mal manejo' o 'mala administración'. Con los siglos, el término se especializó en el ámbito legal y financiero para describir específicamente el acto de desviar, gastar mal o apropiarse indebidamente de los fondos —especialmente públicos— que alguien tenía la obligación de administrar de forma correcta. De la misma raíz versare nos llegan palabras como conversar (dar vueltas a las palabras con alguien) o universo (todo lo que gira como uno solo)." },
    { palabra: "cuñado", etimologia: "La palabra cuñado proviene del latín COGNATUS, un término compuesto por el prefijo co- (con, unión) y la raíz del verbo gnasci (nacer), por lo que su significado literal es 'nacidos de la misma sangre' o 'parientes consanguíneos'. En el derecho romano, los cognati eran los parientes por línea materna o natural. Sin embargo, al pasar al español medieval, la palabra sufrió un giro curioso en su significado: dejó de usarse para los parientes de sangre (a quienes empezamos a llamar 'hermanos' o 'primos') y se especializó exclusivamente para designar a los parientes por afinidad política, es decir, los hermanos del cónyuge. Del latín cognatus también conservamos palabras como cognado (término lingüístico para palabras que comparten el mismo origen, como 'hermanos' de otra lengua) y cognición, que comparte la misma raíz ligada al conocimiento y al nacimiento de las ideas." },
    { palabra: "abuelo", etimologia: "La palabra abuelo proviene del latín vulgar AVIOLUS, que era una forma cariñosa y diminutiva del latín clásico AVUS (que significaba 'abuelo'). El sufijo -olus equivaldría hoy en día a decir 'abuelito'. Con la evolución del latín al castellano medieval, la v (que se pronunciaba como una u semivocal) y los cambios en las vocales transformaron aviolus en ayuelo y, finalmente, en abuelo. Es fascinante notar que la palabra original avus viene de una raíz indoeuropea (awo-) que significa 'adulto protector' o 'anciano de la familia ajeno al núcleo paterno'. De esta misma raíz latina conservamos palabras en español como atávico (referido a los antepasados) y el término legal avuncular (relativo a los tíos, ya que en latín el tío materno se llamaba avunculus, literalmente 'pequeño abuelo')." },
    { palabra: "mortificarse", etimologia: "La palabra mortificarse proviene del verbo latino MORTIFICARE, un término compuesto por dos raíces muy claras: MORS, MORTIS (que significa 'muerte') y el sufijo FACERE (que significa 'hacer'). Literalmente, su significado original era 'hacer morir', 'dar muerte' o 'destruir'. En la antigüedad y durante la Edad Media, el término se usaba en medicina para describir tejidos del cuerpo que se necrosaban o 'morían' (lo que hoy llamamos gangrena), y también en el ámbito religioso para referirse al acto de 'castigar' el cuerpo mediante el ayuno o la penitencia para 'matar' las tentaciones. Con el paso del tiempo, la palabra se suavizó y se trasladó al plano psicológico. Hoy en día, cuando alguien se mortifica, ya no está dañando su cuerpo, sino que está 'matándose la cabeza' a base de angustia, culpa, vergüenza o preocupaciones cotidianas. De esta misma raíz latina compartimos palabras obvias como mortal, mortuorio o amortiguar (hacer morir el impacto de algo)." },
    { palabra: "familia", etimologia: "La palabra familia proviene directamente del latín FAMILIA, la cual a su vez deriva de FAMULUS, que significaba 'sirviente' o 'esclavo'. En el derecho romano original, la familia no designaba al grupo de personas unidas por el amor o la sangre, sino al conjunto de posesiones, criados y esclavos que pertenecían al patrimonio de un mismo hombre, el pater familias (el jefe de la casa). De hecho, la raíz más antigua se vincula al término osco faama, que significaba 'casa' o 'habitación'. Con la evolución de la sociedad y la llegada del cristianismo, el concepto se transformó por completo, dejando atrás la idea de propiedad o servidumbre para pasar a designar al núcleo de personas unidas por el parentesco y el afecto que conocemos hoy. De esta misma raíz latina conservamos términos como familiar, familiarizarse y, de forma más directa a su origen primigenio, el adjetivo famélico (que originalmente se refería al esclavo hambriento)." }
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
        <main className="min-h-screen w-full grid grid-cols-2 gap-5 auto-rows-[350px]">
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[0]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[1]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[2]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[3]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[4]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[5]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[6]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[7]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[8]} /></article>
          <article className="w-full h-auto"><CapsulasComp etimologias={capsulasDatos[9]} /></article>
        </main>
      </div>
    </>
  )
}

export default Capsulas