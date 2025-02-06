import { useState } from 'react'
import style from '../components/ProjectCreationForm.module.css'
import SelectCategory from './SelectCategory'
import SubmitButton from './SubmitButton'
import PropTypes from 'prop-types'

function ProjectCreationForm({ formRequest,projectData,outerClass,buttonText }){
    const [invalidBudgetEntry,setBudgetEntry] = useState(false)
    const [project, setProject] = useState(projectData || {})
    const circleColors = ["pinkish","bluish","greenish","yellowish"]

    const handleSubmit = (e) => {
        e.preventDefault()
        const budgetInput = e.currentTarget.querySelector("#budget")

        const regex = /^[1-9]\d*$/
        const normalizedBudgetValue = Number(budgetInput.value)

        if(!regex.test(normalizedBudgetValue)){
            budgetInput.value = ""
            setBudgetEntry(true)
        } else {
            formRequest(project)
        }
    }

    const handleChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value})
    }

    const handleCategory = (e) => {
        setProject({...project, category: {
            id:e.target.selectedIndex,
            name:e.target.options[e.target.selectedIndex].text,
            color:circleColors[e.target.selectedIndex-1]
        }})
    }

    const handleBudgetInputClick = () => setBudgetEntry(false)

    return (
        <form className={`${style.singleForm} ${style[outerClass]}`} onSubmit={handleSubmit}>
            <p className={style.singleForm__description}>Nome do projeto:</p>
            <input 
                className={style.singleForm__input} 
                onChange={handleChange}
                type="text" 
                name='name' 
                id="name" 
                defaultValue={project.name}
                placeholder='Insira o nome do projeto' 
                autoComplete='off' 
                required
            />
            <p className={style.singleForm__description}>Orçamento do projeto:</p> 
             <input 
                className={`${style.singleForm__input} ${invalidBudgetEntry ? style.invalidBudget : ""}`} 
                onChange={handleChange}
                type="text" 
                name='budget'
                id="budget" 
                defaultValue={project.budget}
                onClick={handleBudgetInputClick}
                placeholder={invalidBudgetEntry ? 'Insira um orçamento válido. Ex: 3000' : 'Insira o orçamento total'} 
                autoComplete='off' 
                required
            />
            <p className={style.singleForm__description}>Selecione a categoria:</p>
            <SelectCategory handleCategory={handleCategory} value={project.category ? project.category.id : ""}/>
            <SubmitButton text={buttonText}/>
        </form>
    )
}

ProjectCreationForm.propTypes = {
    formRequest:PropTypes.func,
    projectData:PropTypes.object,
    outerClass:PropTypes.string,
    buttonText:PropTypes.string
}

export default ProjectCreationForm