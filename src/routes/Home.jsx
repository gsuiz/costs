
import style from "./Home.module.css"
import savings from "../assets/savings.svg";
import { Link } from "react-router-dom" 

export default () => {
    return (
        <div className={style.homePage}>
            <div className={style.homePage__content}>
                <h1 className={style.content__title}>Bem vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <Link to="/novoprojeto"><button className={style.homePage__button}>Criar projeto</button></Link>
            </div>
            <img className={style.homePage__image} src={savings} alt="Savings" />
        </div>
    )
}