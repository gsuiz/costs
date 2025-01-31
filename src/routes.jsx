
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./routes/Home"
import NewProject from "./routes/NewProject"
import Projects from "./routes/Projects"
import EditProject from "./routes/EditProject"
import Empresa from "./routes/Empresa"
import Contato from "./routes/Contato"

export default () => createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[ 
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/novoprojeto",
                element: <NewProject/>
            },
            {
                path:"/projetos",
                element:<Projects/>
            },
            {
                path:"/projetos/:id",
                element:<EditProject/>
            },
            {
                path:"/empresa",
                element:<Empresa/>
            },            
            {
                path:"/contato",
                element:<Contato/>
            }
        ]
    }
])