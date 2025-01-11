
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./routes/Home"
import NewProject from "./routes/NewProject"

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
            }
        ]
    }
])