/* Importaciones */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Seccion = {
    nombre: string,
    imagen: string,
    ruta: string
}

const Carrousel = ({ secciones }: { secciones: Seccion[] }) => {
    const [seccionActual, setSeccionActual] = useState(0)
    const totalSecciones = secciones.length

    /* Botones */
    const next = () => {
        setSeccionActual(seccionActual === totalSecciones - 1 ? 0 : seccionActual + 1)
    }
    const prev = () => {
        setSeccionActual(seccionActual === 0 ? totalSecciones - 1 : seccionActual - 1)
    }
    useEffect(() => {
        secciones.forEach(seccion => {
            const img = new Image()
            img.src = seccion.imagen
        })
    }, [])
    return (
        /* Contenedor */
        <div className="relative h-full rounded-xl overflow-hidden shadow-lg shadow-black/50 ring-1 ring-white/10">
            {/* Secciones del carrusel */}
            {secciones.map((seccion: Seccion, i) => (
                <div key={i} className={`h-full bg-no-repeat bg-cover bg-center flex flex-row justify-center items-end p-2.5 ${i === seccionActual ? "block" : "hidden"}`} style={
                    { backgroundImage: `url(${seccion.imagen})` }}>
                    <Link to={seccion.ruta} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm font-bold">{seccion.nombre}</Link>
                </div>
            ))}
            {/* Botones */}
            <button className="absolute top-[50%] left-[1%]" onClick={prev} title="anterior">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="fill-white w-10 h-10 bg-black/60 rounded-[50%]">
                    <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
            </button>
            <button className="absolute top-[50%] right-[1%]" onClick={next} title="siguiente">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="fill-white w-10 h-10 bg-black/60 rounded-[50%]">
                    <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
            </button>
        </div>
    )
}

export default Carrousel