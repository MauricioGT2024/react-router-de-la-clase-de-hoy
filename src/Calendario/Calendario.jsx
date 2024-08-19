import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Calendario.css";
import { useEffect } from "react";
function Calendario() {

  const [estado1, setEstado1] = useState(null)


  const search = useLocation();
  console.log(search);
  const params = Object.fromEntries(new URLSearchParams(search.search));
  console.log(params);


useEffect(() =>{
    console.log("se renderizo")
}, [])

useEffect(() =>{
  console.log("se actualizo el estado1")
}, [estado1])
  return (
    <>
    <button onClick={() => setEstado1(100)}> {estado1}</button>
      <h1 className="clase-buena">este es mi calendario</h1>
      <table>
        <caption>mes de {params.mes}</caption>
        
      </table>
      <Link to="/">ir a la pagina pricipal</Link>
    </>
  );
}

export { Calendario };
