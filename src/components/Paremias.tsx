/* Importaciones */
import { useEffect, useState } from "react"

/* Type */
type ParemiasType = {
    urlImagen: string,
    expresion: string,
    significado: string,
    origen: string
}
type PropsType = {
    paremias: ParemiasType[],
    titulo: string
}

const ParemiasComp = ({ paremias, titulo }: PropsType) => {
    const [paginaActual, setPaginaActual] = useState(0)
    const pasar = () => { setPaginaActual(pagina => pagina + 1) }

    const [pantallaGrande, setPantallaGrande] = useState(window.innerWidth >= 1280)
    useEffect(() => {
        const handler = () => setPantallaGrande(window.innerWidth >= 1280)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [])

    const [infoAbierta, setInfoAbierta] = useState(false)
    return (
        /* Container */
        <div className="w-full h-full flex flex-row justify-center items-center overflow-y-hidden">
            {/* Libro */}
            <div className="w-[90vw] h-[55vh] xl:w-[100vh] xl:h-[70vh] relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] rounded-md backdrop-blur-sm" style={{
                perspective: "1000px",
                transform: pantallaGrande && paginaActual === 0 ? "translateX(-25vh)" : "translateX(0)"
            }}>
                {/* Tapa superior */}
                <div className="w-[90vw] xl:w-[50vh] h-full bg-yellow-500 absolute top-0 right-0 z-210 rounded-tr-2xl rounded-br-2xl flex flex-row justify-center items-center" onClick={pasar}
                    style={{
                        backfaceVisibility: pantallaGrande ? "visible" : "hidden",
                        zIndex: paginaActual >= 1 ? 0 : 210,
                        transformOrigin: "left center",
                        transform: paginaActual >= 1 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease, z-index 0s 0.35s",
                        transformStyle: "preserve-3d"
                    }}>
                    <h2 className="text-5xl font-bold text-black"
                        style={{
                            backfaceVisibility: "hidden"
                        }}>{titulo}</h2>
                </div>
                {/* Paginas */}
                {paremias.map((paremia, i) => (
                    <div key={i}
                        className="w-[90vw] xl:w-[50vh] h-full bg-stone-200 absolute top-0 right-0 p-5 rounded-tr-2xl rounded-br-2xl border-l border-l-black/40"
                        style={{
                            backfaceVisibility: pantallaGrande ? "visible" : "hidden",
                            zIndex: paginaActual >= i + 2 ? 0 : (200 - i * 10),
                            transformOrigin: "left center",
                            transform: paginaActual >= i + 2 ? "rotateY(-180deg)" : "rotateY(0deg)",
                            transition: "transform 0.7s ease, z-index 0s 0.35s",
                            transformStyle: "preserve-3d"
                        }}>
                        {/* Info */}
                        <div className="w-full h-full flex flex-col justify-start items-center gap-2 md:gap-10 relative"
                            style={{
                                backfaceVisibility: "hidden"
                            }}>
                            <div className="w-full h-[50%]">
                                <img src={paremia.urlImagen} alt="imagen dicho" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-center text-black text-3xl md:text-4xl font-bold">{paremia.expresion}</p>
                            {/* Botones */}
                            <div className="w-full flex flex-row justify-center items-center">
                                <button className="w-10 h-10 hover:scale-110 opacity-20" onClick={() => { setInfoAbierta(true) }}>
                                    <img src="information.svg" alt="informacion" />
                                </button>
                                {/* Next arrow */}
                                <div className="w-full flex flex-row justify-end items-center">
                                    <button onClick={pasar} className="w-10 h-10 bg-black/20 rounded-[50%]">
                                        <img src="flechaSiguiente.svg" alt="siguiente" />
                                    </button>
                                </div>
                            </div>
                            {infoAbierta && (
                                <div className="absolute top-0 left-0 w-full h-full bg-stone-200 p-5 flex flex-col justify-start items-center gap-5 text-xs md:text-2xl text-black lg:text-xl">
                                    {/* Close */}
                                    <div className="w-full flex flex-row justify-end items-center">
                                        <button className="w-10 h-10 hover:scale-110" onClick={() => { setInfoAbierta(false) }}>
                                            <img src="cross.svg" alt="cerrar" />
                                        </button>
                                    </div>
                                    <p><span className="font-bold">Significado: </span>{paremia.significado}</p>
                                    <p><span className="font-bold">Origen: </span>{paremia.origen}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {/* Tapa inferior */}
                <div className="w-[90vw] xl:w-[50vh] h-full bg-yellow-500 absolute top-0 right-0 z-0 rounded-tr-2xl rounded-br-2xl"></div>
            </div>
            <img src="cross.svg" className="hidden" aria-hidden="true" />
        </div>
    )
}

export default ParemiasComp