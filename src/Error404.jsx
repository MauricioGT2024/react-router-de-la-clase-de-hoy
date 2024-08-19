import { useParams } from "react-router-dom"

export function Error404(){
    const params = useParams()
    console.log(params["*"])
    return(
    <>
    
    <h1>amigo esa dirrecion no existe capo andate de aca</h1>
        <p>la Pagina (params["*"])</p>
    </>
)
}

        