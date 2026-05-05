/* Importaciones */
import { useState } from "react"

type PropsType = {
    titulo: string,
    texto: string,
    urlImagen: string
}

const TrabalenguasComp = ({ titulo, texto, urlImagen }: PropsType) => {
    const [abrirTrabalenguas, setAbrirTrabalenguas] = useState(false)
    return (
        <>
            <button className="bg-no-repeat bg-cover bg-center w-full h-full flex flex-row justify-center items-end pb-[10%] hover:scale-110" style={{ backgroundImage: `url(${urlImagen})` }} onClick={() => { setAbrirTrabalenguas(true) }}>
                <h2 className="text-white font-bold text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">{titulo}</h2>
            </button>
            {abrirTrabalenguas && (
                <div className="fixed z-10 top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 max-h-[100vh] overflow-y-auto flex flex-col justify-start items-center bg-[#1c1a16]/80 rounded-md backdrop-blur-sm p-5">
                    <button className="text-white bg-yellow-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-red/60 px-3 py-1 rounded-md backdrop-blur-sm mb-7" onClick={() => { setAbrirTrabalenguas(false) }}>Cerrar</button>
                    {/* Info */}
                    <div className="w-full flex flex-col items-center gap-2.5">
                        <h2 className="text-4xl text-white font-bold mb-5">{titulo}</h2>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="w-full xl:w-[60vh] xl:mx-auto aspect-square bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${urlImagen})` }}></div>
                            <p className="text-2xl text-white/80 text-justify w-[90%] self-start mx-auto">{texto}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TrabalenguasComp