
import style from "../routes/EditProject.module.css"
import SubmitButton from "./SubmitButton"

const ServiceAdditionForm = () => {
    return (
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
    )
}

export default ServiceAdditionForm