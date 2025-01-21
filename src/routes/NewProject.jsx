
import style from './NewProject.module.css'
import CreateProjectBtn from '../components/CreateProjectBtn'
import SelectCategory from '../components/SelectCategory'
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
                <SelectCategory />
                <CreateProjectBtn text="Criar Projeto"/>
            </form>
        </div>
    )
}