/* Importaciones */
import { useState } from "react"

/* Type */
type ParemiasType = {
    urlImagen: string,
    dicho: string
}

const ParemiasComp = ({ urlImagen, dicho }: ParemiasType) => {
    const [paginaActual, setPaginaActual] = useState(0)
    const pasar = () => { setPaginaActual(pagina => pagina + 1) }
    return (
        /* Container */
        <div className="w-full h-full bg-red-200 flex flex-row justify-center items-center overflow-y-hidden">
            {/* Libro */}
            <div className="w-[100vh] h-[70vh] bg-yellow-400 relative">
                {/* Tapa superior */}
                <div className="w-[50vh] h-full bg-blue-400 absolute top-0 right-0 z-210" onClick={pasar}
                    style={{
                        /* backfaceVisibility: "hidden", */ /* en movil */
                        zIndex: paginaActual >= 1 ? 0 : 210,
                        transformOrigin: "left center",
                        transform: paginaActual >= 1 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease, z-index 0s 0.35s",
                    }}></div>
                {/* Paginas */}
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-200 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 2 ? 0 : 200,
                        transformOrigin: "left center",
                        transform: paginaActual >= 2 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-190 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 3 ? 0 : 190,
                        transformOrigin: "left center",
                        transform: paginaActual >= 3 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-180 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 4 ? 0 : 180,
                        transformOrigin: "left center",
                        transform: paginaActual >= 4 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-170 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 5 ? 0 : 170,
                        transformOrigin: "left center",
                        transform: paginaActual >= 5 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-160 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 6 ? 0 : 160,
                        transformOrigin: "left center",
                        transform: paginaActual >= 6 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-150 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 7 ? 0 : 150,
                        transformOrigin: "left center",
                        transform: paginaActual >= 7 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-140 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 8 ? 0 : 140,
                        transformOrigin: "left center",
                        transform: paginaActual >= 8 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-130 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 9 ? 0 : 130,
                        transformOrigin: "left center",
                        transform: paginaActual >= 9 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-120 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 10 ? 0 : 10,
                        transformOrigin: "left center",
                        transform: paginaActual >= 10 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-110 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 11 ? 0 : 110,
                        transformOrigin: "left center",
                        transform: paginaActual >= 11 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-100 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 12 ? 0 : 100,
                        transformOrigin: "left center",
                        transform: paginaActual >= 12 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-90 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 13 ? 0 : 90,
                        transformOrigin: "left center",
                        transform: paginaActual >= 13 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-80 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 14 ? 0 : 80,
                        transformOrigin: "left center",
                        transform: paginaActual >= 14 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-70 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 15 ? 0 : 70,
                        transformOrigin: "left center",
                        transform: paginaActual >= 15 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-60 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 16 ? 0 : 60,
                        transformOrigin: "left center",
                        transform: paginaActual >= 16 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-50 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 17 ? 0 : 50,
                        transformOrigin: "left center",
                        transform: paginaActual >= 17 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-40 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 18 ? 0 : 40,
                        transformOrigin: "left center",
                        transform: paginaActual >= 18 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-30 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 19 ? 0 : 30,
                        transformOrigin: "left center",
                        transform: paginaActual >= 19 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-20 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 20 ? 0 : 20,
                        transformOrigin: "left center",
                        transform: paginaActual >= 20 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                <div className={`w-[50vh] h-full bg-white absolute top-0 right-0 z-10 bg-[url(${urlImagen})]`} onClick={pasar}
                    style={{
                        zIndex: paginaActual >= 21 ? 0 : 10,
                        transformOrigin: "left center",
                        transform: paginaActual >= 21 ? "rotateY(-180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s ease"
                    }}>{dicho}</div>
                {/* Tapa inferior */}
                <div className="w-[50vh] h-full bg-green-300 absolute top-0 right-0 z-0"></div>
            </div>
        </div>
    )
}

export default ParemiasComp