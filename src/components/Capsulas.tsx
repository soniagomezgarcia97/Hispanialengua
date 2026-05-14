/* Importaciones */

import { useState } from "react"

const CapsulasComp = () => {
    const [etimilogiaAbierta, setEtimilogiaAbierta] = useState(false)
    return (
        /* Container */
        <div className="w-1/2 h-1/2 bg-orange-200 relative">
            <button className="w-full h-1/2 bg-blue-300 z-20 absolute top-0 left-0" 
            onClick={() => {setEtimilogiaAbierta(!etimilogiaAbierta)}}>Primavera</button>
            <p className="w-full h-1/2 bg-red-300 z-10 absolute top-0 left-0 p-5" 
            style={{
                transform: etimilogiaAbierta ? "translateY(100%)" : "translateY(0%)",
                transition: "transform 1s ease"
            }}>Proviene del latín PRIMA VERA, que significa “primer verano...”. Esta expresión latina se refería a la primera estación del año, que se consideraba una especie de preludio del verano, una temporada cálida, que en la antigua Roma comenzaba a finales de marzo y principios de abril</p>
        </div>
    )
}

export default CapsulasComp