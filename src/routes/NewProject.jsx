
import style from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'
import ProjectCreationForm from '../components/ProjectCreationForm'

export default () => {

    const navigate = useNavigate()

    const postRequest = async(projects) => {
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

            navigate("/projetos", { state: { message: "Projeto criado com sucesso!" } })

        } catch(err){
            console.log(err)
        }
    }

    return (
        <div className={style.creationForm}>
            <h1 className={style.creationForm__title}>Criar Projeto</h1>
            <p className={style.creationForm__description}>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectCreationForm 
                formRequest = {postRequest}
                buttonText="Criar Projeto"
            />
        </div>
    )
}