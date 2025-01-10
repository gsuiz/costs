import savings from "../assets/savings.svg";

export default () => {
    return (
        <div className="homePage">
            <div className="homePage__content">
                <h1 className="content__title">Bem vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <button className="homePage__button">Criar projeto</button>
            </div>
            <img src={savings} alt="Savings" />
        </div>
    )
}