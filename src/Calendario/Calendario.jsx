import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Calendario.css";
import { Calendar } from "../Calendar/Calendar";
import { useEffect, useState } from "react";
export function Calendario() {

  const [estado1, setEstado1] = useState(null)


  // const search = useLocation();
  // console.log(search);
  // const params = Object.fromEntries(new URLSearchParams(search.search));
  // console.log(params);


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
      <Calendar/>
      <Link to="/">ir a la pagina pricipal</Link>
    </>
  );
}


