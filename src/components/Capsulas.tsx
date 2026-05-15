/* Importaciones */
import { useState } from "react"

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
    return (
        /* Container */
        <div className="w-full h-full overflow-hidden relative">
            <button className="w-full h-1/2 z-20 absolute top-0 left-0 bg-[url('ImagesCapsulas/capsula.png')] bg-no-repeat bg-cover bg-center"
                onClick={() => { setEtimilogiaAbierta(!etimilogiaAbierta) }}>{etimologias.palabra}</button>
            <div className="w-full h-1/2 z-10 absolute top-0 left-0"
                style={{
                    transform: etimilogiaAbierta ? "translateY(100%)" : "translateY(0%)",
                    opacity: etimilogiaAbierta ? "1" : "0",
                    transition: "transform 1s ease, opacity 1s ease"
                }}>
                <p className="w-[80%] mx-auto bg-white p-5 leading-7">{etimologias.etimologia}</p>
            </div>
        </div>
    )
}

export default CapsulasComp