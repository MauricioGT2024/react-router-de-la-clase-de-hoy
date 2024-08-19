import { useParams } from "react-router-dom"

export function Error404(){
    const params = useParams()
    return(
    <>
    <h1>amigo esa dirrecion no existe capo andate de aca</h1>
        <h2>la Pagina {params["*"]} no existe</h2>
    </>
)
}

        