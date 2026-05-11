/* Importaciones */
import { useState } from "react"
import { Link } from "react-router-dom"
import ParemiasComp from "../components/Paremias"

const Paremias = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false)
  const [dichos, setDichos] = useState(true)
  const [refranes, setRefranes] = useState(false)
  const paremiasDatos = [
    { urlImagen: "Imagesdichos/cria_fama.webp", dicho: "«Cría fama y échate a dormir»", significado: "Indica que una vez que te has labrado una reputación (buena o mala), esta te precederá y condicionará la opinión de los demás sin que tengas que hacer nada más, ya que es muy difícil cambiar la primera impresión.", origen: "Proviene de la idea de que la fama es una inercia difícil de frenar. Se basa en una fábula donde un perro, tras salvar a un niño y ganar fama de héroe, pudo permitirse descansar mientras todos asumían que seguía siendo el más valiente, aunque ya no hiciera nada." },
    { urlImagen: "Imagesdichos/ojo_amo_caballo.webp", dicho: "«El ojo del amo engorda al caballo»", significado: "Indica que las cosas se cuidan y funcionan mejor cuando es el propio dueño quien las supervisa directamente. La atención personal y el interés del propietario aseguran que el trabajo se haga correctamente.", origen: "Proviene de la sabiduría popular agraria y ganadera. Se basa en la observación de que un cuidador ajeno nunca tendrá el mismo celo que el dueño, quien, al estar presente y atento ('el ojo'), se asegura de que el caballo esté bien alimentado y sano." },
    { urlImagen: "Imagesdichos/buen_entendedor.webp", dicho: "«A buen entendedor pocas palabras bastan»", significado: "Indica que una persona inteligente o atenta comprende rápidamente lo que se quiere decir sin necesidad de explicaciones detalladas. Apela a la perspicacia y a la economía del lenguaje.", origen: "Tiene raíces clásicas en el latín ('Dictum sapienti sat est'). Se popularizó en la literatura del Siglo de Oro, apareciendo en obras como El Quijote, reflejando la idea de que la comunicación es más eficaz cuando hay entendimiento mutuo sin rodeos." },
    { urlImagen: "Imagesdichos/perro_flaco.webp", dicho: "«A perro flaco todo son pulgas»", significado: "Indica que a las personas que ya tienen problemas o atraviesan una mala racha, suelen acumulárseles nuevas desgracias. La adversidad parece atraer más adversidad.", origen: "Proviene de la observación empírica en el campo: los parásitos prefieren a los animales débiles o enfermos porque tienen menos defensas para espantarlos. Es una metáfora de cómo la pobreza o la debilidad atraen infortunios adicionales." },
    { urlImagen: "Imagesdichos/dicho_hecho.webp", dicho: "«Del dicho al hecho hay mucho trecho»", significado: "Advierte que existe una gran diferencia entre lo que se promete y lo que realmente se cumple. Nos recuerda que hablar es fácil, pero llevar las palabras a la acción requiere un esfuerzo que no siempre se realiza.", origen: "Es una expresión de origen medieval muy común en la literatura clásica española. La palabra 'trecho' hace referencia a la distancia física, creando una metáfora sobre el largo camino que separa la intención de la realidad." },
    { urlImagen: "Imagesdichos/san_pedro.webp", dicho: "«A quien Dios se la dé, San pedro se la bendiga»", significado: "Se usa para expresar conformidad o resignación ante la suerte o el éxito de alguien, aunque nos parezca inmerecido o extraño. También indica que no queremos intervenir en los asuntos de otros, dejando la responsabilidad en manos de una autoridad superior.", origen: "Tiene un trasfondo religioso y jerárquico. En la tradición católica, San Pedro es el custodio de las llaves del cielo y representante de la Iglesia; por tanto, si Dios otorga una gracia, San Pedro (la autoridad terrenal) solo puede ratificarla y bendecirla sin cuestionarla." },
    { urlImagen: "Imagesdichos/cesto_cientos.webp", dicho: "«Quien hace un cesto hace ciento»", significado: "Indica que quien comete una falta o tiene un comportamiento determinado una vez, es muy probable que lo repita. Se usa para advertir que las acciones definen un hábito o el carácter de una persona.", origen: "Proviene del mundo de la artesanía y la cestería. Se basa en la idea de que una vez que se ha aprendido la técnica para fabricar el primer cesto (o se ha perdido el miedo a cometer un error), el resto vendrán rodados por inercia o costumbre." },
    { urlImagen: "Imagesdichos/col_lechuga.webp", dicho: "«Entre col y col, lechuga»", significado: "Indica que en medio de una tarea monótona o una serie de cosas iguales, conviene introducir algo diferente para variar y hacerlo más ameno. Se usa para justificar una distracción o un cambio de tema en una conversación larga.", origen: "Proviene de la agricultura tradicional. Los hortelanos solían plantar lechugas entre las hileras de coles para aprovechar mejor el terreno y el tiempo de riego, ya que la lechuga crece mucho más rápido. Así, la 'lechuga' rompía la monotonía del cultivo principal." },
    { urlImagen: "Imagesdichos/caer_burro.webp", dicho: "«Poner a alguien a bajar (caer) de un burro»", significado: "Criticar a alguien con dureza o reprenderlo severamente. Se usa cuando se enumeran todos los fallos de una persona sin filtros.", origen: "Proviene de la expresión 'caer del burro' (reconocer un error). Al 'poner a alguien a caer del burro', lo que hacemos es forzarlo —mediante la crítica— a que reconozca sus faltas o baje de su pedestal de terquedad." },
    { urlImagen: "Imagesdichos/boca_cerrada.webp", dicho: "«En boca cerrada no entran moscas»", significado: "Es una advertencia sobre la prudencia. Nos recuerda que es mejor callar y ser discretos que hablar de más y cometer un error o causar un problema innecesario.", origen: "Aunque es de tradición oral, se tiene constancia de su uso desde el siglo XIV en textos arábico-andaluces. La metáfora es sencilla: quien mantiene la boca cerrada se ahorra tragar algo desagradable (o decir algo inconveniente)." },
    { urlImagen: "Imagesdichos/febrero_humero.webp", dicho: "«'En febrero un rato al sol y otro al humero' y 'En febrero saca la lengua el perro'.»", significado: "Ambos reflejan la inestabilidad de febrero. El primero alude a que el tiempo cambia tanto que pasas de buscar el sol a refugiarte en el humero (la chimenea). El segundo indica que ya empiezan a darse días de calor impropio que hacen que el perro jadee.", origen: "Son refranes del mundo rural y pastoril. Febrero es un mes de transición; el 'humero' era el lugar de la casa donde se ahumaba la matanza y se buscaba el calor del fuego, mientras que el 'perro con la lengua fuera' simboliza los primeros amagos de primavera que engañan a la naturaleza." },
    { urlImagen: "Imagesdichos/dios_rogando.webp", dicho: "«A Dios rogando y con el mazo dando»", significado: "Enseña que no basta con rezar o esperar ayuda externa; es necesario esforzarse y trabajar por lo que se desea. La ayuda divina debe ir acompañada de la acción personal.", origen: "Citado por Cervantes en El Quijote, se atribuye a un encuentro entre San Bernardo y un carretero cuyo carro se rompió. Al pedir el hombre un milagro, el santo le respondió: “Yo rogaré a Dios, amigo, y tú entretanto da con el mazo (trabaja en arreglarlo)”." },
    { urlImagen: "Imagesdichos/digo_diego.webp", dicho: "«Donde dije digo, digo Diego»", significado: "Se utiliza para rectificar una afirmación anterior o desdecirse de lo dicho. Es la fórmula perfecta para cuando alguien cambia de opinión o intenta corregir un error negando su declaración previa.", origen: "Proviene de un antiguo juego de palabras popular. Se basa en la similitud fonética entre 'digo' (del verbo decir) y el nombre propio 'Diego'. La frase completa, 'Donde dije digo, digo Diego', juega con ese sonido para transformar una palabra en otra y así anular lo dicho anteriormente con un toque de ingenio." },
    { urlImagen: "Imagesdichos/tirar_la_toalla.webp", dicho: "«Tirar la toalla»", significado: "Significa rendirse ante una dificultad, desistir de un empeño o reconocer que no se puede ganar una batalla. Es admitir la derrota y abandonar el esfuerzo que se estaba realizando.", origen: "Proviene del mundo del boxeo. Cuando un entrenador ve que su boxeador está recibiendo demasiado castigo y no puede continuar, arroja una toalla al centro del ring. Es la señal reglamentaria para que el árbitro detenga el combate de inmediato." },
    { urlImagen: "Imagesdichos/madrugar.webp", dicho: "«No por mucho madrugar amanece más temprano»", significado: "Advierte que no por precipitarse o actuar con excesiva premura se logran antes los resultados. Nos recuerda la importancia de la paciencia y de 'darle tiempo al tiempo', ya que hay procesos naturales que no se pueden acelerar.", origen: "Es un refrán de tipo meteorológico y agrícola. Se basa en la observación de la naturaleza: el ciclo del sol es inalterable y no depende del esfuerzo humano. Surgió en el entorno rural para enseñar que el éxito requiere no solo trabajo (madrugar), sino también respetar los tiempos adecuados." },
    { urlImagen: "Imagesdichos/ciego.webp", dicho: "«No hay peor ciego que el que no quiere ver»", significado: "Se refiere a las personas que, teniendo la verdad o la evidencia delante, se niegan a aceptarla por prejuicio o conveniencia. Indica que es imposible convencer a alguien que ha decidido cerrar su mente.", origen: "Tiene una base bíblica y filosófica muy antigua, presente en diversas culturas. La frase subraya que la ceguera física es una limitación natural, pero la ceguera mental es una elección voluntaria, lo que la hace mucho más difícil de 'curar'." },
    { urlImagen: "Imagesdichos/trapo.webp", dicho: "«Poner a alguien como un trapo»", significado: "Significa reprender a alguien con mucha dureza, insultarlo o criticarlo de forma despiadada, dejándolo sin capacidad de defensa o moralmente 'por los suelos'.", origen: "La metáfora alude al uso de los trapos de limpieza, que se estrujan, se ensucian y se tiran con desprecio tras ser usados. Al tratar a una persona como un trapo, se le quita su dignidad, manejándola y despreciándola como si fuera un objeto viejo y sin valor." },
    { urlImagen: "Imagesdichos/pajaro_en_mano.webp", dicho: "«Más vale pájaro en mano que ciento volando»", significado: "Aconseja valorar lo que se tiene de forma segura, aunque sea poco, en lugar de ambicionar cosas mejores que son inciertas o difíciles de conseguir. Es un elogio a la seguridad frente al riesgo.", origen: "Proviene de la antigua cetrería y el arte de la caza. Para un cazador, tener una presa ya capturada 'en la mano' era una garantía de alimento, mientras que ver muchas aves en el aire no servía de nada si no lograba atrapar ninguna." },
    { urlImagen: "Imagesdichos/mal_tiempo_buena_cara.webp", dicho: "«Al mal tiempo, buena cara»", significado: "Aconseja mantener una actitud positiva y optimista cuando las cosas van mal o surgen contratiempos. Nos recuerda que, aunque no podamos cambiar las circunstancias, sí podemos elegir cómo reaccionar ante ellas.", origen: "Proviene de la sabiduría popular marinera y agrícola. Antiguamente, cuando el clima impedía faenar o trabajar el campo, el trabajador no ganaba nada lamentándose; por ello, se recomendaba mantener el ánimo alto para estar listos y con fuerzas en cuanto el temporal amainara." },
    { urlImagen: "Imagesdichos/perro_ladrador.webp", dicho: "«Perro ladrador, poco mordedor.»", significado: "Se aplica a personas que amenazan mucho, hablan con arrogancia o hacen mucho ruido, pero que a la hora de actuar no hacen nada. Sugiere que quien mucho presume, poco suele cumplir.", origen: "Proviene de la observación del comportamiento animal. En el mundo canino, un perro que ladra constantemente lo hace por miedo o para marcar territorio desde lejos, mientras que el perro que realmente va a atacar suele estar callado y tenso antes de morder." }
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