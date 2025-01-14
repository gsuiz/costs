
import style from './NewProject.module.css'
import { useState } from 'react'

export default () => {

    const [invalidBudgetEntry,setBudgetEntry] = useState(false)
    const [validationErrorClass, setErrorClass] = useState(false)

    const handleBudgetInputClick = () => setErrorClass(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const budgetInput = e.currentTarget.querySelector("#budget")

        checkBudgetPattern(budgetInput)
    }

    const checkBudgetPattern = (budgetAmount) => {
        const regex = /^[1-9]\d*$/
        const normalizedBudgetValue = Number(budgetAmount.value)

        if(!regex.test(normalizedBudgetValue)){
            budgetAmount.value = ""
            setBudgetEntry(true)
            setErrorClass(true)
        } else {
            alert("tudo certo!")
        }
    }

    return (
        <div className={style.creationForm}>
            <h1 className={style.creationForm__title}>Criar Projeto</h1>
            <p className={style.creationForm__description}>Crie seu projeto para depois adicionar os serviços</p>
            <form className={style.singleForm} onSubmit={handleSubmit}>
                <p className={style.singleForm__description}>Nome do projeto:</p>
                <input className={style.singleForm__input} type="text" id="name" placeholder='Insira o nome do projeto' autoComplete='off' required/>
                <p className={style.singleForm__description}>Orçamento do projeto:</p> 
                <input className={`${style.singleForm__input} ${validationErrorClass ? style.invalidBudget : ""}`} type="text" id="budget" onClick={handleBudgetInputClick} placeholder= {invalidBudgetEntry ? 'Insira um orçamento válido. Ex: 3000' : 'Insira o orçamento total'} autoComplete='off' required/>
                <p className={style.singleForm__description}>Selecione a categoria:</p>
                <select className={style.singleForm__select} id="category" defaultValue="" required>
                    <option value="" disabled>Selecione uma opção:</option>
                    <option value="Infra">Infra</option>
                    <option value="Desenvolvimento">Desenvolvimento</option>
                    <option value="Design">Design</option>
                    <option value="Planejamento">Planejamento</option>
                </select>
                <button className={style.singleForm__button} id="button">Criar Projeto</button>
            </form>
        </div>
    )
}