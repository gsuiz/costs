import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SubmitButton from "../components/SubmitButton"
import style from "./Projects.module.css"
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


function Projects(){
    const [projects, setProjects] = useState([])
    const variavel = 'kkk'

    useEffect(() => {
        const requestProjects = async() => {
            try{
                const response = await fetch("http://localhost:5000/projects")
                const data = await response.json()
    
                setProjects(data)
            } catch(err){
                console.log(`ERROR IN PROMISE:${err}`)
            }
        }

        requestProjects()
    },[])

    return (
        <div className={style.projects}>
            <div className={style.projects__top}>
                <h1>Meus projetos</h1>
                <Link to={"/novoprojeto"}>
                    <SubmitButton text="Criar projeto"></SubmitButton>
                </Link>
            </div>
            {projects.length 
                ? 
                    <ul className={style.projects__list}>
                        {projects.map(item => 
                            <li className={style.projects__single} key={item.id}>
                                <div className={style.single__name}>{item.name}</div>
                                <p><strong>Orçamento:</strong> R${item.budget}</p>
                                <p>
                                    <span className={`${style.single__coloredCircle} ${style[`single__coloredCircle--${item.category.color}`]}`}></span>
                                    {item.category.name}
                                 </p>
                                <div className={style.single__buttons}>
                                    <button className={style.single__editBtn}><MdEdit/> Editar</button>
                                    <button className={style.single__deleteBtn}><FaTrashAlt/> Excluir</button>
                                </div>
                            </li>
                        )}
                    </ul>
                :
                    <p className={style.projects__alert}>Não há projetos cadastrados!</p>
            }
        </div>
    )
}

export default Projects