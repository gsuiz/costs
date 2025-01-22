import style from '../routes/NewProject.module.css'
import SelectCategory from './SelectCategory'
import SubmitButton from './SubmitButton'
import PropTypes from 'prop-types'

function ProjectCreationForm({ sendFunction,erroRemoveFunction,inputErrorState,invalidBudget }){
    return (
        <form className={style.singleForm} onSubmit={sendFunction}>
            <p className={style.singleForm__description}>Nome do projeto:</p>
            <input className={style.singleForm__input} type="text" id="name" placeholder='Insira o nome do projeto' autoComplete='off' required/>
            <p className={style.singleForm__description}>Orçamento do projeto:</p> 
            <input 
                className={`${style.singleForm__input} ${inputErrorState ? style.invalidBudget : ""}`} 
                type="text" 
                id="budget" 
                onClick={erroRemoveFunction}
                placeholder={invalidBudget ? 'Insira um orçamento válido. Ex: 3000' : 'Insira o orçamento total'} 
                autoComplete='off' 
                required
            />
            <p className={style.singleForm__description}>Selecione a categoria:</p>
            <SelectCategory />
            <SubmitButton text="Criar Projeto"/>
        </form>
    )
}

ProjectCreationForm.propTypes = {
    sendFunction: PropTypes.func,
    erroRemoveFunction:PropTypes.func,
    inputErrorState:PropTypes.bool,
    invalidBudget:PropTypes.bool
}

export default ProjectCreationForm