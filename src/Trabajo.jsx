import { useParams } from "react-router-dom"

export function Trabajo(){
const {numero} = useParams()



    return(<>
        <h1>esta es mi pagina de trabajo</h1>
        <p>Trabajo n {numero}</p>
       
        </>
    )
    
}