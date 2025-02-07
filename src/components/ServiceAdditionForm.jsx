
import { useEffect, useState } from "react"
import style from "../routes/EditProject.module.css"
import SubmitButton from "./SubmitButton"

const ServiceAdditionForm = ({addService,setServices}) => {
    const [service, setService] = useState("")

    const handleChange = (e) => 
        setService((state) => { 
            return {...state, [e.target.name]: e.target.value} 
        })

    useEffect(() => setServices((state) =>
        [...state,service]
    ),[service])

    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceNameInput = e.currentTarget.querySelector("#nameService")
        const serviceCostInput = e.currentTarget.querySelector("#serviceCost")
        const serviceDescriptionInput = e.currentTarget.querySelector("#serviceDescription")

        serviceNameInput.value = ""
        serviceCostInput.value = ""
        serviceDescriptionInput.value = ""

        addService(service)
    }    

    return (
        <>
            <form className={style.addService__form} onSubmit={handleSubmit}>
                <p>Nome do serviço:</p>
                <input type="text" id="nameService" name="name" className={style.addService__input} onChange={handleChange} placeholder="Insira o nome do serviço" />
                <p>Custo do serviço:</p>
                <input type="text" id="serviceCost" name="cost" className={style.addService__input} onChange={handleChange} placeholder="Insira o valor total"/>
                <p>Descrição do projeto:</p>
                <input type="text" id="serviceDescription" name="description" className={style.addService__input} onChange={handleChange} placeholder="Descreva o serviço"/>
                <SubmitButton text="Adicionar Serviço" modifier="submitButton--enlarged"/>
            </form>
        </>
    )
}

export default ServiceAdditionForm