import { useRoutes } from "react-router-dom"
import {routes} from "../../routes"

function ALLRouter(){
    const elements = useRoutes(routes)
    return(
        <>
        {elements}
        </>
    )
}
export default ALLRouter ;