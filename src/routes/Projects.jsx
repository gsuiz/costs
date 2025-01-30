import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SubmitButton from "../components/SubmitButton"
import style from "./Projects.module.css"
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


function Projects(){
    const [projects, setProjects] = useState([])
    const [projectAddition,setProjectAddition] = useState(false)

    const handleDeleteClick = async(e) => {
        try{
            const nameProject = e.currentTarget.parentElement.parentElement.querySelector("#name").textContent
            const projectToDelete = projects.find(item => item.name === nameProject)

            const response = await fetch("http://localhost:5000/projects",{
                method:"DELETE",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(projectToDelete)
            })
        } catch(err){
            console.log(`ERROR IN DELETE:${err}`)
        }
    }   

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

            {projectAddition && <div className={style.successMessage}>Projeto criado com sucesso!</div>}

            {projects.length 
                ? 
                    <ul className={style.projects__list}>
                        {projects.map(item => 
                            <li className={style.projects__single} key={item.id}>
                                <div className={style.single__name} id="name">{item.name}</div>
                                <p><strong>Orçamento:</strong> R${item.budget}</p>
                                <p>
                                    <span className={`${style.single__coloredCircle} ${style[`single__coloredCircle--${item.category.color}`]}`}></span>
                                    {item.category.name}
                                 </p>
                                <div className={style.single__buttons}>
                                    <button className={style.single__editBtn}><MdEdit/> Editar</button>
                                    <button className={style.single__deleteBtn} onClick={handleDeleteClick}><FaTrashAlt/> Excluir</button>
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