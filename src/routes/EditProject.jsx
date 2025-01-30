import style from "./EditProject.module.css"
import SubmitButton from "../components/SubmitButton"
import DeleteButton from "../components/DeleteButton"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditProject = () => {
    const { id } = useParams()
    const [project,setProject] = useState({})
    const [services,setServices] = useState([])
    const [addService,setAddService] = useState(false)

    useEffect(() => {
        const requestProject = async() => {
            const response = await fetch("http://localhost:5000/projects")
            const data = await response.json()

            setProject(() => data.find(item => item.id === id))
        }
        
        requestProject()
    },[])
    
    useEffect(() => setServices(project.services || []),[project])

    const handleChangeFromAddingServices = () => addService ? setAddService(false) : setAddService(true)

    const handleDeleteClick = () => {
        console.log("nçãsadz")
    }

    return (
        <div className={style.editProject}>
            <div className={style.project}>
                <div className={style.project__infor}>
                    <h1 className={style.infor__name}>Projeto: {project.name}</h1>
                    <ul className={style.infor__list}>
                        <li><span>Categoria:</span> {project.category?.name}</li>
                        <li><span>Total do Orçamento:</span> R${project.budget}</li>
                        <li><span>Total utilizado:</span> R${project.costs}</li>
                    </ul>
                </div>
                <SubmitButton text="Editar Projeto"/>
            </div>
            <hr />
            <div className={style.addService}>
                <div className={style.addService__visibleElement}>
                    <h2>Adicione um serviço:</h2>
                    { 
                    !addService 
                        ?   
                            <SubmitButton handle={handleChangeFromAddingServices} text="Adicionar Serviço" modifier="submitButton--enlarged"/>
                        :
                            <SubmitButton handle={handleChangeFromAddingServices} text="Fechar"/>   
                     }
                </div>
                {addService && (
                    <>
                        <form className={style.addService__form}>
                            <p>Nome do serviço:</p>
                            <input type="text" id="nameService" className={style.addService__input} placeholder="Insira o nome do serviço" />
                            <p>Custo do serviço:</p>
                            <input type="text" id="serviceCost" className={style.addService__input} placeholder="Insira o valor total"/>
                            <p>Descrição do projeto:</p>
                            <input type="text" id="serviceDescription" className={style.addService__input} placeholder="Descreva o serviço"/>
                        </form>
                        <SubmitButton text="Adicionar Serviço" modifier="submitButton--enlarged"/>
                    </>
                )}
            </div>
            <hr />
            <div className={style.services}>
                <h2>Serviços:</h2>
                {services.length
                    ?
                        <ul className={style.services__single}>
                            {services.map((item,index) => 
                                <li className={style.single__item} key={index}>
                                    <h2 className={style.item__name}>{item.name}</h2>
                                    <p className={style.item__cost}><span>Custo total:</span> R${item.cost}</p>
                                    <p>{item.description}</p>
                                    <DeleteButton handle={handleDeleteClick}/>
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