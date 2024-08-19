import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaPrincipal } from "./PaginaPrincipal/PaginaPrincipal";
import { About } from "./About/About";
import { Calendario } from "./Calendario/Calendario";
import { Trabajo } from "./Trabajo/Trabajo";
import { Error404 } from "./Error404/Error404";
import { Navbar } from "./Navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
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
