/* Importaciones */

import { useState } from "react"

const CapsulasComp = () => {
    const [etimilogiaAbierta, setEtimilogiaAbierta] = useState(false)
    return (
        /* Container */
        <div className="w-1/2 h-1/2 bg-blue-400 relative"
            style={{
                zIndex: etimilogiaAbierta ? 10 : 0,
                transition: etimilogiaAbierta ? "z-index 0s 0s" : "z-index 0s 1s"
            }}>
            <button className="w-full h-full bg-red-400 overflow-hidden z-20" onClick={() => setEtimilogiaAbierta(!etimilogiaAbierta)}>Primavera</button>
            {/* Etimologia */}
            <div className="z-10" style={{
                transform: etimilogiaAbierta ? "translateY(100%)" : "translateY(0%)",
                transition: "transform 0.7s ease"
            }}>
                <p className="bg-white text-black z-20">Proviene del latín PRIMA VERA, que significa “primer verano, “primer verdor”. Esta expresión latina se refería a la primera estación del año, que se consideraba una especie de preludio del verano, una temporada cálida, que en la antigua Roma comenzaba a finales de marzo y principios de abril.</p>
            </div>
        </div>
    )
}

export default CapsulasComp