import style from "./EditProject.module.css"
import SubmitButton from "../components/SubmitButton"
import DeleteButton from "../components/DeleteButton"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProjectCreationForm from "../components/ProjectCreationForm"
import ServiceAdditionForm from "../components/ServiceAdditionForm"
import Message from "../components/Message"

const EditProject = () => {
    const { id } = useParams()
    const [project,setProject] = useState({})
    const [services,setServices] = useState()
    const [addService,setAddService] = useState(false)
    const [editProject,setEditProject] = useState(false)
    const [message,setMessage] = useState("")

    const [nameProject,setNameProject] = useState("") 
    const [categoryProject,setCategoryProject] = useState("")
    const [budgetProject,setBudgetProject] = useState("")
    const [costsProject,setCostsProject] = useState(0)

    useEffect(() => {
        const requestProject = async() => {
            try{
                const response = await fetch("http://localhost:5000/projects")
                const data = await response.json()

                setProject(() => data.find(item => item.id === id))
            } catch(err){
                console.error(`Erro ao buscar projeto: ${err}`)
            }
        }
        requestProject()
    },[])
    
    useEffect(() => {
        setNameProject(project.name)
        setCategoryProject(project.category?.name)
        setBudgetProject(Number(project.budget))
        if(project.services?.length){
            setCostsProject(project.services.reduce((acc,item) => acc + Number(item.cost) ,0))
        } else {
            setCostsProject(0)
        }
        setServices(project.services)
        console.log(project)
    },[project])

    const updateRequest = async(editedProject) => {
        try{
            const response =  await fetch(`http://localhost:5000/projects/${project.id}`,
                {
                    method:"PUT",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(editedProject)
                }
            )
    
            toggleFromEditProject()
            setMessage("Projeto editado com sucesso!")
            setProject(editedProject)
        } catch(err){
            console.error(`Erro ao editar projeto: ${err}`)
        }
    } 

    const addServiceRequest = async(service) => {
        try{
            const response = await fetch(`http://localhost:5000/projects/${project.id}`,
                {
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({costs:project.costs + Number(service.cost), services:[...services,service]})
                }
            )

            setProject((state) => {
                return {...state,costs:project.costs + Number(service.cost), services:[...services,service]}
            })
            setMessage("Serviço adicionado!")
        } catch(err){
            console.error(`Erro na adição de serviço:${err}`)
        }
    }

    const handleDeleteClick = async(service) => {
        const response = await fetch(`http://localhost:5000/projects/${project.id}`, {
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({costs: project.costs - Number(service.cost), services:services.filter(item => item !== service) })
        })

        setProject((state) => {
            return {...state,costs:project.costs - Number(service.cost), services: services.filter(item => item !== service)}
        })

        setMessage("Serviço removido com sucesso!")
    }

    const toggleAddingServices = () => addService ? setAddService(false) : setAddService(true)
    const toggleFromEditProject = () => editProject ? setEditProject(false) : setEditProject(true)

    return (
        <div className={style.editProject}>
            <div className={style.project}>
                <Message text={message} type="success" messageUpdate={setMessage}/>
                <div className={style.project__infor}>
                    <h1 className={style.infor__name}>Projeto: {nameProject}</h1>
                    <SubmitButton text={editProject ? "Fechar" : "Editar Projeto"} handle={toggleFromEditProject}/>
                </div>
                {editProject 
                    ?
                        <ProjectCreationForm formRequest={updateRequest} projectData={project} outerClass="project__editForm" buttonText="Concluir edição"/>
                    :
                        <ul className={style.infor__list}>
                            <li><span>Categoria:</span> {categoryProject}</li>
                            <li><span>Total do Orçamento:</span> R${budgetProject}</li>
                            <li><span>Total utilizado:</span> R${costsProject}</li>
                        </ul>

                }
            </div>
            <hr />
            <div className={style.addService}>
                <div className={style.addService__visibleElement}>
                    <h2>Adicione um serviço:</h2>
                    <SubmitButton handle={toggleAddingServices} text={addService ? "Fechar" : "Adicionar Serviço" } />
                </div>
                {addService && <ServiceAdditionForm addService={addServiceRequest} budget={budgetProject} costs={project.costs}/>}
            </div>
            <hr />
            <div className={style.services}>
                <h2>Serviços:</h2>
                {services && services.length > 0
                    ?
                        <ul className={style.services__single}>
                            {services.map((item,index) => 
                                <li className={style.single__item} key={index}>
                                    <h2 className={style.item__name}>{item.name}</h2>
                                    <p className={style.item__cost}><span>Custo total:</span> R${item.cost}</p>
                                    <p>{item.description}</p>
                                    <DeleteButton handle={() => handleDeleteClick(item)}/>
                                </li>   
                            )}
                        </ul>
                    :
                        <p>Não há serviços cadastrados.</p>
                }
            </div>
        </div>
    )
}

export default EditProject