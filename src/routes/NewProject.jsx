
import style from './NewProject.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCreationForm from '../components/ProjectCreationForm'
import SubmitButton from '../components/SubmitButton'

export default () => {

    const [invalidBudgetEntry,setBudgetEntry] = useState(false)
    const [validationErrorClass, setErrorClass] = useState(false)

    const handleBudgetInputClick = () => setErrorClass(false)
   
    const navigate = useNavigate()
  
    const postRequest = (budgetAmount,projects) => {
        const regex = /^[1-9]\d*$/
        const normalizedBudgetValue = Number(budgetAmount.value)

        if(!regex.test(normalizedBudgetValue)){
            budgetAmount.value = ""
            setBudgetEntry(true)
            setErrorClass(true)
        } else {
            const submitForm = async(projects) => {
                try{
                    projects.costs = 0
                    projects.services = []

                    const response = await fetch("http://localhost:5000/projects", {
                        method:"POST",
                        headers:{
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(projects)
                    })
                    
                    const data = await response.json()
 
                    navigate("/projetos")

                } catch(err){
                    console.log(err)
                }
            }

            submitForm(projects)
        }
    }

    return (
        <div className={style.creationForm}>
            <h1 className={style.creationForm__title}>Criar Projeto</h1>
            <p className={style.creationForm__description}>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectCreationForm 
                functions = { [postRequest,handleBudgetInputClick] }
                states = { [invalidBudgetEntry,validationErrorClass] }
                buttonText="Criar Projeto"
            />
        </div>
    )
}