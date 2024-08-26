import { useParams, useSearchParams } from "react-router-dom";



export function Event(){
    const params = useParams();
    const [searchParamas, setSearchParams] = useSearchParams()
    const title = searchParamas.get("title")
    const date = searchParamas.get("date")
    const endinghour = searchParamas.get("ending_hour")
    const startinghour = searchParamas.get("starting_hour")
    const color = searchParamas.get("color")
    const creator = searchParamas.get("creator")

    console.log(title, date, endinghour, startinghour, color, creator)

    return(
        <ul>
            <li>id: {params.id}</li>
            <li>titulo: {title}</li>
            <li>fecha: {date}</li>
            <li>empieza a las: {startinghour}</li>
            <li>termina a las: {endinghour}</li>
            <li>color: {color}</li>
            <li>creador: {creator}</li>
        </ul>
    )
}