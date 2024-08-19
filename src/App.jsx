import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { About } from "./About";
import { Calendario } from "./Calendario";
import { Trabajo } from "./Trabajo";
import { Error404 } from "./Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <p>Barra de Navegacion</p>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}></Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/calendario/" element={<Calendario />}></Route>
          <Route path="/trabajo/:numero/:dificultad" element={<Trabajo />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
