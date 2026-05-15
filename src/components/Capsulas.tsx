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

const CapsulasComp = ({etimologias}: PropsType) => {
    const [etimilogiaAbierta, setEtimilogiaAbierta] = useState(false)
    return (
        /* Container */
        <div className="w-full h-full bg-orange-200 relative">
            <button className="w-full h-1/2 bg-blue-300 z-20 absolute top-0 left-0" 
            onClick={() => {setEtimilogiaAbierta(!etimilogiaAbierta)}}>{etimologias.palabra}</button>
            <p className="w-full h-1/2 bg-red-300 z-10 absolute top-0 left-0 p-5" 
            style={{
                transform: etimilogiaAbierta ? "translateY(100%)" : "translateY(0%)",
                transition: "transform 1s ease"
            }}>{etimologias.etimologia}</p>
        </div>
    )
}

export default CapsulasComp