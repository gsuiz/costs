import style from "./EditProject.module.css"
import SubmitButton from "../components/SubmitButton"

const EditProject = () => {
    return (
        <>
            <div className="project">
                <div className="project__infor">
                    <h1 className="infor__name"></h1>
                    <ul className="infor__list">
                        <li>Categoria:</li>
                        <li>Total do Orçamento:</li>
                        <li>Total utilizado:</li>
                    </ul>
                </div>
                <SubmitButton text="Editar Projeto"/>
            </div>
            <hr />
            <div className="add-service">
                <h2>Adicione um serviço:</h2>
                <SubmitButton text="Adicione Serviço"/>
                <SubmitButton text="Fechar"/>
                <form className="add-service__form">
                    <p>Nome do serviço:</p>
                    <input type="text" placeholder="Insira o nome do serviço" />
                    <p>Custo do serviço:</p>
                    <input type="text" placeholder="Insira o valor total"/>
                    <p>Descrição do projeto:</p>
                    <input type="text" placeholder="Descreva o serviço"/>
                    <SubmitButton text="Adicionar Serviço"/>
                </form>
            </div>
            <hr />
            <div className="services">
                <h2>Serviços:</h2>
                <p>Não há serviços cadastrados.</p>
                <ul className="services__single">
                    <li className="single__item">
                        <h2></h2>
                        <p>Custo total:</p>
                        <p></p>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default EditProject