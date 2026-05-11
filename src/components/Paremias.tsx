/* Importaciones */
import { useEffect, useState } from "react"

/* Type */
type ParemiasType = {
    urlImagen: string,
    dicho: string
}
type PropsType = {
    paremias: ParemiasType[]
}

const ParemiasComp = ({ paremias }: PropsType) => {
    const [paginaActual, setPaginaActual] = useState(0)
    const pasar = () => { setPaginaActual(pagina => pagina + 1) }
    const [pantallaGrande, setPantallaGrande] = useState(window.innerWidth >= 1280)
    useEffect(() => {
        const handler = () => setPantallaGrande(window.innerWidth >= 1280)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    },[])
    return (
        /* Container */
        <div className="w-full h-full flex flex-row justify-center items-center overflow-y-hidden">
            {/* Libro */}
            <div className="w-[90vw] h-[55vh] xl:w-[100vh] xl:h-[70vh] relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] rounded-md backdrop-blur-sm" style={{ 
                perspective: "1000px",
                transform: pantallaGrande && paginaActual === 0 ? "translateX(-25vh)": "translateX(0)" }}>
                {/* Tapa superior */}
                <div className="w-[90vw] xl:w-[50vh] h-full bg-yellow-500 absolute top-0 right-0 z-210 rounded-tr-2xl rounded-br-2xl" onClick={pasar}
                    style={{
                        backfaceVisibility: pantallaGrande ? "visible" : "hidden",
                        zIndex: paginaActual >= 1 ? 0 : 210,
                        transformOrigin: "left center",
                        transform: paginaActual >= 1 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease, z-index 0s 0.35s",
                    }}></div>
                {/* Paginas */}
                {paremias.map((paremia, i) => (
                    <div key={i}
                        className="w-[90vw] xl:w-[50vh] h-full bg-stone-200 absolute top-0 right-0 p-5 rounded-tr-2xl rounded-br-2xl border-l border-l-black/40"
                        onClick={pasar}
                        style={{
                            backfaceVisibility: pantallaGrande ? "visible" : "hidden",
                            zIndex: paginaActual >= i + 2 ? 0 : (200 - i * 10),
                            transformOrigin: "left center",
                            transform: paginaActual >= i + 2 ? "rotateY(-180deg)" : "rotateY(0deg)",
                            transition: "transform 0.7s ease, z-index 0s 0.35s",
                            transformStyle: "preserve-3d"
                        }}>
                            {/* Info */}
                        <div className="w-full h-full flex flex-col justify-start items-center gap-10"
                            style={{
                                backfaceVisibility: "hidden"
                            }}>
                            <div className="w-full h-[50%]">
                                <img src={paremia.urlImagen} alt="imagen dicho" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-center text-black text-3xl md:text-4xl xl:text-5xl font-bold">{paremia.dicho}</p>
                        </div>

                    </div>
                ))}
                {/* Tapa inferior */}
                <div className="w-[90vw] xl:w-[50vh] h-full bg-yellow-500 absolute top-0 right-0 z-0 rounded-tr-2xl rounded-br-2xl"></div>
            </div>
        </div>
    )
}

export default ParemiasComp