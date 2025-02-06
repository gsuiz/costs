import { useEffect, useState } from "react"
import { Link,useLocation } from "react-router-dom"
import SubmitButton from "../components/SubmitButton"
import style from "./Projects.module.css"
import { MdEdit } from "react-icons/md";
import DeleteButton from "../components/DeleteButton";
import Message from "../components/Message";
import Loading from "../components/Loading"

function Projects(){
    const [projects, setProjects] = useState([])
    const [message, setMessage] = useState("")
    const [showLoading, setShowLoading] = useState(true)

    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            setMessage(location.state.message)
        }
    }, [location.state])


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
        setTimeout(() => setShowLoading(false) ,200)
    },[])

    return ( 
        <div className={style.projects}>
            <div className={style.projects__top}>
                <h1>Meus projetos</h1>
                <Link to={"/novoprojeto"}>
                    <SubmitButton text="Criar projeto"></SubmitButton>
                </Link>
            </div>

            <Message text={message} type="success"/>


            {projects.length  && !showLoading
                ? 
                    <ul className={style.projects__list}>
                        {projects.map(item => 
                            <li className={style.projects__single} key={item.id}>
                                <h1 className={style.single__name} id="name">{item.name}</h1>
                                <p><strong>Orçamento:</strong> R${item.budget}</p>
                                <p>
                                    <span className={`${style.single__coloredCircle} ${style[`single__coloredCircle--${item.category?.color}`]}`}></span>
                                    {item.category?.name}
                                 </p>
                                <div className={style.single__buttons}>
                                    <Link to={`/projetos/${item.id}`}><button className={style.single__editBtn}><MdEdit/> Editar</button></Link>
                                    <DeleteButton handle={handleDeleteClick}/>
                                </div>
                            </li>
                        )}
                    </ul>
                :
                <p className={style.projects__alert}>Não há projetos cadastrados!</p>
            }

            {showLoading && <Loading/>}
        </div>
    )
}

export default Projects