/* Importaciones */
import { useEffect, useState } from "react"

/* Type */
type CapsulasType = {
    palabra: string,
    etimologia: string
}

type PropsType = {
    etimologias: CapsulasType
}

const CapsulasComp = ({ etimologias }: PropsType) => {
    const [etimilogiaAbierta, setEtimilogiaAbierta] = useState(false)
    const [esTablet, setEsTablet] = useState(window.innerWidth >= 768)
    useEffect(() => {
        const handler = () => {setEsTablet(window.innerWidth >= 768)}
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    })
    const [esOrdenador, setEsOrdenador] = useState(window.innerWidth >= 900)
    useEffect(() => {
        const handler = () => {setEsOrdenador(window.innerWidth >= 900)}
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    })
    return (
        /* Container */
        <div className="w-full h-full relative">
            <button className="w-full h-1/2 z-20 absolute top-0 left-0 bg-[url('ImagesCapsulas/capsula.png')] bg-no-repeat bg-contain lg:bg-cover bg-center text-2xl font-bold uppercase"
                onClick={() => { setEtimilogiaAbierta(!etimilogiaAbierta) }}>{etimologias.palabra}</button>
            <div className="w-full h-1/2 z-10 absolute top-0 left-0"
                style={{
                    transform: etimilogiaAbierta ? (esTablet ? (esOrdenador ? "translateY(110%)" : "translateY(80%)") : "translateY(75%)") : "translateY(0%)",
                    opacity: etimilogiaAbierta ? "1" : "0",
                    transition: "transform 1s ease, opacity 1s ease"
                }}>
                <p className="w-[80%] mx-auto bg-white p-5 leading-7 drop-shadow-[0_6px_16px_rgba(0,0,0,1)]
 px-3 py-1 rounded-md backdrop-blur-sm">{etimologias.etimologia}</p>
            </div>
        </div>
    )
}

export default CapsulasComp