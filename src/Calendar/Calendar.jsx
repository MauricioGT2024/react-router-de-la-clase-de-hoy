import { Link } from "react-router-dom";
import "./Calendar.css";

function Event({
  id,
  title,
  date,
  starting_hour,
  ending_hour,
  color,
  creator,
  display
}) {
  return (
    <Link className="link" to={`/event/${id}?title=${title}&date=${date}&starting_hour=${starting_hour}&ending_hour=${ending_hour}&color=${color}&creator=${creator}`}>
      <div className={"/event" + display} style={{ backgroundColor: color }}>
        {title.slice(0, 15) + (title.length > 10 ? "..." : "")}
      </div>
    </Link>
  );
}
export function Calendar() {
  return (
    <>
      <table className="calendar-table">
        <tr>
          <td>Lunes</td>
          <td>Martes</td>
          <td>Miercoles</td>
          <td>Jueves</td>
          <td>Viernes</td>
          <td>Sabado</td>
          <td>Domingo</td>
        </tr>
        <tr>
          <td>
            {" "}
            <Event
            id={1}
              title="Clase con lucio el fachero"
              date="15/08/2024"
              starting_hour="14:00"
              ending_hour="17:00"
              color="yellow"
              creator="Lucio"
              display="month"
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}
