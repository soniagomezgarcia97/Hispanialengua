/* Importaciones */

import { Link } from "react-router-dom"
import TrabalenguasComp from "../components/Trabalenguas"
import { useState } from "react"

const Trabalenguas = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false)
  return (
    <>
      {/* Container */}
      <div className="bg-[#1c1a16] w-full min-h-screen flex flex-col relative">
        {/* Header */}
        <header className="w-full col-span-1 bg-[#0f0e0b] lg:h-screen p-10 flex flex-col gap-6 self-start lg:col-span-2 xl:col-span-1">
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
        <main className="flex-1 p-2.5">
          {/* Title and subtitle */}
          <div className="w-full p-10 flex flex-col justify-center items-center gap-2.5">
            <h2 className="text-white font-bold text-3xl">Juega con las palabras</h2>
            <p className="text-white/80">Pincha sobre una imagen para revelar el trabalenguas. ¡Intenta decirlo en voz alta sin equivocarte!</p>
          </div>
          {/* Grid trabalenguas */}
          <ul className="w-full h-full p-5 grid grid-cols-1 lg:grid-cols-4 gap-2.5">
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="La cosaquez" texto="La cosaquez, ¿qué cosa, qué cosa es? ¿Acaso es común que un cosaco cosa un saco
                        mientras cerca una cosaca cose y cose una casaca? ¡Qué caso! ¡Qué cosa! A la hora del ocaso el
                        cosaco y la cosaca cosen juntos un saquito, Tal vez venga un cosaquito. ¡Qué cosa! ¡Qué caso!
                        ¡Qué casa! ¡Qué saco! ¡Qué caso raro el de la cosaquez!" urlImagen="ImagesTrabalenguas/la_cosaquez.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Un corsario rudo" texto="Hubo un corsario rudo, tozudo, pancibarrigudo, frenticabezudo, barbipelambrudo
                        que hacía tempestades soplando un embudo. Y tenía un amigo mudo, huesudo, cuellicogotudo,
                        ojituertiagudo, pernetipeludo, luerguipatilludo que hundía los barcos con sus estornudos." urlImagen="ImagesTrabalenguas/corsario_rudo.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En el pueblo hay una plaza" texto="En el pueblo hay una plaza,

                        en la plaza hay una esquina,

                        en la esquina hay una casa,

                        en la casa hay una pieza,

                        en la pieza hay una cama,

                        en la cama hay una estera,

                        en la estera hay una vara,

                        en la vara hay una lora,

                        en la lora hay una vara,

                        la vara en la estera, la estera en la cama, en la cama hay una pieza, en la pieza hay una casa,
                        en la casa hay una esquina, y en la esquina hay una cama." urlImagen="ImagesTrabalenguas/pueblo_plaza.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Una gallina pinta" texto="Una gallina pinta, pipiripinta, pipirigorda, ronogativa, ciega y sorda tiene
                        unos pollitos pipiripintos, pipirigordos, ronogativos, ciegos y sordos." urlImagen="ImagesTrabalenguas/gallina_pinta.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Menuda mandarina" texto="Menuda mandarina María merendó, menuda merienda que se zampó. Mirando la
                        mandarina Macario pensó que una manzana sería mejor. Menuda mandarina María merendó, menuda
                        manzana Macario se zampó. Mirando la mandarina y la manzana, Mariela opinó que un melocotón
                        sabría mejor. Menuda mandarina María merendó." urlImagen="ImagesTrabalenguas/menuda_mandarina.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En la espesura esmeralda" texto="En la espesura esmeralda de la selva susurrante,

                        se trenzan trillones de tramas titilantes.

                        Tras las ramas retorcidas, ríos revoloteantes,

                        resuenan risueñas ranas, radiantes y resonantes.

                        Entre el murmullo multicolor de mariposas mágicas,

                        mil trucos tramposos, trémulos y fantásticos.

                        Trozos trémulos de tréboles trenzan títeres tácticos,

                        tejiendo texturas temerarias, tótems tánticos.

                        Bajo el trinar tumultuoso de tórtolas triunfantes,

                        tres trillones de travesías transcurren vibrantes.

                        Tiembla la tierra, trinos traspasan distantes,

                        transformando travesuras en tréboles fulgurantes." urlImagen="ImagesTrabalenguas/espesura_esmeralda.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En el brillo brumoso" texto="En el brillo brumoso de la brisa quebradiza,

                        se trenza la trama de la trova tempraniza.

                        Tras trémulos trazos, trasciende la travesía,

                        trilobitas trinan, titilan con maestría.

                        Entre lirios líquidos, líricos y lejanos,

                        el lamento lóbrego de los lunares llanos.

                        Lúgubres lamentos, luces lúcidas, livianas,

                        luceros límpidos, líneas lunares tempranas.

                        Trepan travesaños, trazan tesoros tintos,

                        torbellinos tumultuosos, tientos, destintos.

                        Tejiendo tejidos, trenzando travesuras,

                        tiran los tiempos, trillan las travesías puras." urlImagen="ImagesTrabalenguas/brillo_brumoso.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En un trigal" texto="En un trigal trigué trigo y en un trigal trigado trigué trigo. En el trigal
                        trigué trigo. en el trigal triguado, ¡trigüé trigo!" urlImagen="ImagesTrabalenguas/en_un_trigal.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En el llano de la lluvia" texto="En el llano de la lluvia y el lucero brillante,

                        llueve en la noche, la llamarada constante.

                        Las luciérnagas llaman con luz titilante,

                        y el lobo aullando, la luna llena amante." urlImagen="ImagesTrabalenguas/llano_lluvia.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Gabriel gritó" texto="Gabriel gritó a la gruta gris, donde el dragón drástico dragaba, mientras en la
                        plácida pradera un plato de glaseado brillaba. Gritando en la gruta grande, grande gritando en
                        la gruta, Gabriel gritó." urlImagen="ImagesTrabalenguas/gabriel_grito.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En el globo grande" texto="En el globo grande, Gloria gira globos. Gloria grita y grita mientras sus
                        globos agita: ¡Globos de Gloria, glóbulos de globos!" urlImagen="ImagesTrabalenguas/globo_grande.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En el prado bravo" texto="En el prado bravo brillan las flores,

                        prontas para brotar con sus colores.

                        Bajo el bravo sol, se abren con primor,

                        pruebas su perfume, ¡qué dulce olor!" urlImagen="ImagesTrabalenguas/prado_bravo.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Ricardo rueda" texto="Ricardo rueda raudo en su bicicleta roja,

                        mientras relucen las luces en la avenida larga.

                        Rápido recorre rutas llenas de risas

                        entre relieves y ríos, su viaje sin prisa." urlImagen="ImagesTrabalenguas/ricardo_rueda.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Anita lava la tina" texto="Anita lava la tina

                        y en la tina lava su ratón.

                        Y en la otra tina, lava su camión." urlImagen="ImagesTrabalenguas/anita_tina.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Ave rápida" texto="Un ave rápida trina, un oso canta,

                        Un elefante brama, una iguana encanta,

                        Un oído atento capta el canto,

                        Y un unicornio danza al ritmo del encanto." urlImagen="ImagesTrabalenguas/ave_rapida.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Frente a la fuente de enfrente" texto="Frente a la fuente de enfrente, la frente fuensanta frunce. Fuensanta frunce la
                        frente frente a la fuente de enfrente. ¿La frunce, o finge fruncirla? ¿Fingir, Fuensanta fingir?
                        ¡Fuensanta no finge, frunce! ¡La frente frunce Fuensanta! Frunce Fuensanta la frente frente a la
                        fuente de enfrente." urlImagen="ImagesTrabalenguas/frente_enfrente.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Capa parda" texto="Amigo mío, compra buena capa parda. Que el que buena capa parda compra, buena
                        capa parda paga. Que esté bien hilada, bien bordada y bien acortapizada. Se llama al hilador, al
                        bordador y al acortapizador, para que la hile, la borde y la acortapice mejor." urlImagen="ImagesTrabalenguas/capa_parda.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Es esperanzador" texto="Es esperanzador que esperanza tenga las esperanzas suficientes para esperanzar
                        a aquellas personas sin esperanzas que gustan de la esperanza de tener las esperanzas
                        suficientes que siempre quisieron para tener muchas esperanzas y realizar esperanzadores de
                        esperanzar." urlImagen="ImagesTrabalenguas/esperanzador.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Catalina encantadora" texto="Catalina cantarina, Catalina encantadora: Canta, Catalina, canta, que cuando
                        cantas me encantas; y que tu cántico cuente un cuento que a mí me encanta. ¿Qué cántico
                        cantarás, Catalina cantarina?, canta un cuento que me encante, que me encante cuando cantes.
                        Catalina encantadora, ¿Qué cántico cantarás?." urlImagen="ImagesTrabalenguas/catalina.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Quique es un caco" texto="quique es un caco que quiere queso. el queso que quiere quique el caco lo
                        quiere comer coco, el pequeño koala que canta contento. pero el queso que quiere quique, el caco
                        que quiere queso y coco, el koala que canta contento, no está en el cuenco colorido que contiene
                        el queso que coque, el cocker que se come el coco, ha cortado. ¿quién se ha comido el queso que
                        quiere quique el caco? ¿la culpa es de quique, el caco que
                        quiere queso? ¿de coco, el koala que canta contento? ¿o de coque, el cocker que se come el coco?" urlImagen="ImagesTrabalenguas/quique_caco.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Antón comilón" texto="Antón, comilón, ¡come, come, comilón! Come pan y come queso, chocolate y
                        caramelo, come azúcar y turrón. ¡Come, come, comilón!" urlImagen="ImagesTrabalenguas/anton_comilon.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Treinta y tres troncos" texto="Treinta y tres trechos de troncos trocearon tres trozadores tristes de troncos,
                        y tresdoblaron su trabajo, tresdoblando su trabajo de trocear troncos y tronquitos" urlImagen="ImagesTrabalenguas/troncos.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Siniestro usa la diestra" texto="Siniestro usa la diestra, que la diestra es la maestra,

                        a menos que seas tan siniestro que no puedas con la diestra." urlImagen="ImagesTrabalenguas/siniestro_diestra.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Había una madre" texto="Había una madre godable, pericotable y tantarantable que tenía un hijo godijo,
                        pericotijo y tantarantijo.

                        Un día la madre godable, pericotable y tantarantable le dijo a su hijo godijo, pericotijo y
                        tantarantijo:

                        -Hijo godijo, pericotijo y tantarantijo, traedme la liebre godiebre, pericotiebre y
                        tantarantiebre del monte godonte, pericotonte y tantarantonte.

                        Así, el hijo godijo, pericotijo y tantarantijo fue al monte godonte, pericotonte y tantarantonte
                        a traer la liebre godiebre, pericotiebre y tantarantiebre." urlImagen="ImagesTrabalenguas/madre_godable.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Si mi gusto gustara..." texto="Si mi gusto gustara del gusto que gusta a tu gusto,

                        entonces tu gusto gustaría del gusto que gusta a mi gusto,

                        pero como mi gusto no gusta del gusto que gusta tu gusto,

                        entonces tu gusto no gusta del gusto que gusta a mi gusto... te gusto!" urlImagen="ImagesTrabalenguas/gusto_gustara.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Erre con erre" texto="Erre con erre guitarra,

                        Erre con erre carril,

                        Mira qué rápido ruedan

                        Las ruedas del ferrocarril.

                        Erre con erre guitarra,

                        Erre con erre barril,

                        Rápidos corren los carros

                        Cargados de azúcar al ferrocarril.

                        Erre con erre guitarra,

                        Erre con erre carril,

                        Qué rápido ruedan

                        Las ruedas del ferrocarril." urlImagen="ImagesTrabalenguas/erre_con_erre.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Hubo una gran riña" texto="Hubo una gran riña en España entre el que ciñe el armiño

                        por su rapiña y su hazaña y Peñuñuri, el buen niño que,

                        con su leño y su caña, al bañarse en el río Miño,

                        en la mañana, sin maña, ñoñamente ciñó un guiño." urlImagen="ImagesTrabalenguas/gran_rina.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Ese Lolo es un Lelo" texto="Ese Lolo es un lelo, le dijo a Lola don Lalo: no, Lola, ese Lolo no es lelo, es
                        un lila. ¿Es un lila, don Lolo, ese Lolo, en vez de ser lelo?. Sí, Lola, es un lila y no un lelo
                        ese Lolo, le dijo don Lalo a la Lola.
                        El sonido L ofrece problemas de pronunciación a determinadas lenguas. Practica, verás cómo en
                        poco tiempo no te resulta un fonema complicado." urlImagen="ImagesTrabalenguas/lolo_lelo.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Trabalenguas de la J" texto="Jamás juntes a jinetes con los jóvenes germánicos, ni generes germicidas, ni
                        congeles gelatinas, ni ajusticies a juristas en sus juntas judiciales." urlImagen="ImagesTrabalenguas/trabalenguas_jota.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Pablito clavó un clavito" texto="Pablito clavó un clavito en la calva de un calvito, en la calva de un calvito,
                        clavó un clavito Pablito" urlImagen="ImagesTrabalenguas/pablito_clavito.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="En la ciudad de pamplona" texto="En la ciudad de Pamplona hay una plaza.
                        En la plaza hay una esquina.
                        En la esquina hay una casa.
                        En la casa hay una pieza.
                        En la pieza hay una cama.
                        En la cama hay una estera.
                        En la estera hay una barra.
                        En la barra hay una lora.
                        Luego la lora a la barra, la barra a la estera, la estera a la cama, la cama a la pieza, la
                        pieza a la casa, la casa a la esquina, la esquina a la plaza, la plaza a la ciudad de Pamplona." urlImagen="ImagesTrabalenguas/ciudad_pamplona.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Eugenio es muy ingenuo" texto="Eugenio es muy ingenuo, pero ¡qué mal genio tiene el ingenuo de eugenio!" urlImagen="ImagesTrabalenguas/eugenio_ingenuo.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="suecos en suecia" texto="Hay suecos en Suiza y suizos en Suecia, pero hay más suizos en suiza que suizos
                        en suecia y más suecos en suecia que suizos en suecia" urlImagen="ImagesTrabalenguas/suecos_suecia.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="María Chuchena" texto="María chuchena techaba su choza, y un techador que por allí pasaba, le dijo:
                        maría chuchena, ¿tú techas tu choza o techas la ajena? ni techo mi choza, ni techo la ajena, que
                        techo la choza de maría chuchena." urlImagen="ImagesTrabalenguas/maria_chuchena.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="El perro de San Roque" texto="El perro de san roque no tiene rabo porque ramón ramírez se lo ha cortado. y al
                        perro de ramón ramírez, ¿quién el rabo le ha cortado?" urlImagen="ImagesTrabalenguas/perro_san_roque.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="El cielo está enladrillado" texto="El cielo está enladrillado, quién lo desenladrillará? el desenladrillador que
                        lo desenladrille, buen desenladrillador será" urlImagen="ImagesTrabalenguas/cielo_enladrillado.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Parra tenía un perro" texto="Parra tenía un perro y Guerra tenía una parra. El perro de Parra subió a la
                        parra de Guerra y Guerra pegó con la porra al perro de Parra." urlImagen="ImagesTrabalenguas/parra_perro.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Yo como coco" texto="Yo poco coco como, poco coco como yo. si poco coco yo como, poco coco compro yo" urlImagen="ImagesTrabalenguas/como_coco.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Tres tristes tigres" texto="Tres tristes tigres comen trigo en un trigal" urlImagen="ImagesTrabalenguas/tigres_trigo.webp" /></li>
            <li className="w-full h-full aspect-square"><TrabalenguasComp titulo="Pancho" texto="Pancho regaló una plancha a Pancha, por eso Pancha plancha con la plancha que
                        le regaló Pancho." urlImagen="ImagesTrabalenguas/pancho.webp" /></li>
          </ul>
        </main>
      </div>
    </>
  )
}

export default Trabalenguas