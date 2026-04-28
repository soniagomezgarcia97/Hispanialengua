/* Importaciones */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainView from "./Pages/MainView"
import Trabalenguas from "./Pages/Trabalenguas"
import Capsulas from "./Pages/Capsulas"
import Paremias from "./Pages/Paremias"
import EspanolVivo from "./Pages/EspanolVivo"
import Juegos from "./Pages/Juegos"
import Cortos from "./Pages/Cortos"
import Musica from "./Pages/Musica"
import Cultura from "./Pages/Cultura"
import Comarca from "./Pages/Comarca"
import SobreNosotros from "./Pages/SobreNosotros"

export default function router() {
  return (
    <>
      <BrowserRouter basename="/Hispanialengua">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/capsulas" element={<Capsulas />} />
          <Route path="/paremias" element={<Paremias />} />
          <Route path="/espanol-vivo" element={<EspanolVivo />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/trabalenguas" element={<Trabalenguas />} />
          <Route path="/cortos" element={<Cortos />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/comarca" element={<Comarca />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}