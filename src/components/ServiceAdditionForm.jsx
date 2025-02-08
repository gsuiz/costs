
import { useEffect, useState } from "react"
import style from "../routes/EditProject.module.css"
import SubmitButton from "./SubmitButton"

const ServiceAdditionForm = ({addService,budget}) => {
    const [service,setService] = useState({})
    const [invalidServiceCost, setInvalidCost] = useState(false)
    
    const handleChange = (e) => {
        setService((state) => {
            return { ...state, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputs = Array.from(e.currentTarget.querySelectorAll("input"))

        const regex = /^[1-9]\d*$/

        if(Number(service.cost) > budget || !regex.test(service.cost)){
            setInvalidCost(true)
            inputs[1].value = ""
        } else{
            setInvalidCost(false)
            addService(service)
            inputs.forEach(item => item.value = "")
        }
    } 

    return (
        <>
            <form className={style.addService__form} onSubmit={handleSubmit}>
                <p>Nome do serviço:</p>
                <input type="text" 
                    id="nameService" 
                    name="name" 
                    className={style.addService__input} 
                    onChange={handleChange} 
                    placeholder="Insira o nome do serviço" 
                    required
                />
                <p>Custo do serviço:</p>
                <input type="text" 
                    id="serviceCost" 
                    name="cost" 
                    className={`${style.addService__input} ${invalidServiceCost ? style.invalidCost : ""}`} 
                    onChange={handleChange} 
                    placeholder={`${ invalidServiceCost ? `Insira um valor válido. Ex:${(budget / 5).toFixed()}` : 'Insira o valor do serviço'}`}
                    required
                />
                <p>Descrição do projeto:</p>
                <input 
                    type="text" 
                    id="serviceDescription" 
                    name="description" 
                    className={style.addService__input} 
                    onChange={handleChange} 
                    placeholder="Descreva o serviço" 
                    required/>
                <SubmitButton text="Adicionar Serviço" modifier="submitButton--enlarged"/>
            </form>
        </>
    )
}

export default ServiceAdditionForm