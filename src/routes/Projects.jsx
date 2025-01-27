import { useEffect, useState } from "react"
import SubmitButton from "../components/SubmitButton"
import style from "./Projects.module.css"

function Projects(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const requestProjects = async() => {
            const response = await fetch("http://localhost:5000/projects")
            const data = await response.json()

            setProjects(data)
        }

        requestProjects()
    },[])

    return (
        <div className={style.projects}>
            <div className={style.projects__top}>
                <h1>Meus projetos</h1>
                <SubmitButton text="Criar projeto"></SubmitButton>
            </div>
            {projects 
                ? 
                    <ul className={style.projects__list}>
                        {projects.map(item => {
                            <li className={style.projects__single}>
                                {item.name}
                            </li>
                        })}
                    </ul>
                :
                    <p>Não há projetos cadastrados</p>
            }
        </div>
    )
}

export default Projects