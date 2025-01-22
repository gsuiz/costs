
import style from './NewProject.module.css'
import { useState } from 'react'
import ProjectCreationForm from '../components/ProjectCreationForm'

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

        }
    }

    return (
        <div className={style.creationForm}>
            <h1 className={style.creationForm__title}>Criar Projeto</h1>
            <p className={style.creationForm__description}>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectCreationForm 
                sendFunction={handleSubmit} 
                erroRemoveFunction={handleBudgetInputClick}
                inputErrorState={validationErrorClass}
                invalidBudget={invalidBudgetEntry}
            />
        </div>
    )
}