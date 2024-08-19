import { NavLink } from "react-router-dom"
import "./Navbar.css"
export function Navbar(){
    return(
        <>
        <nav>
            <NavLink className={isActive => "NavLink"} to="/">Home</NavLink>
            <NavLink className={isActive => "NavLink"} to="/about">SobreNosotros</NavLink>
            <NavLink className={isActive => "NavLink"} to="/calendario">Calendario</NavLink>
            <NavLink className={isActive => "NavLink"} to="/trabajo/1/facil">Trabajo</NavLink>
        </nav>
        </>
    )
}