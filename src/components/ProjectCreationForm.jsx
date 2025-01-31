import { useState } from 'react'
import style from '../components/ProjectCreationForm.module.css'
import SelectCategory from './SelectCategory'
import SubmitButton from './SubmitButton'
import PropTypes from 'prop-types'

function ProjectCreationForm({ functions=[], states=[],projectData,outerClass, buttonText }){
    const [ sendFunction,erroRemoveFunction ] = functions
    const [ inputErrorState,invalidBudget ] = states
     
    const [project, setProject] = useState(projectData || {})
    const circleColors = ["pinkish","bluish","greenish","yellowish"]
    const handleSubmit = (e) => {
        e.preventDefault()
        const budgetInput = e.currentTarget.querySelector("#budget")

        sendFunction(budgetInput,project)
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
                className={`${style.singleForm__input} ${inputErrorState ? style.invalidBudget : ""}`} 
                onChange={handleChange}
                type="text" 
                name='budget'
                id="budget" 
                defaultValue={project.budget}
                onClick={erroRemoveFunction}
                placeholder={invalidBudget ? 'Insira um orçamento válido. Ex: 3000' : 'Insira o orçamento total'} 
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
    functions:PropTypes.array,
    states:PropTypes.array,
    outerClass:PropTypes.string,
    buttonText:PropTypes.string
}

export default ProjectCreationForm