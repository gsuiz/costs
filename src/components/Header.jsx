
import MenuToogle from "./MenuToogle"
import { Link } from "react-router-dom"

export default () => (
    <header className="navbar">
        <img src="assets/costs_logo.png" alt="imagem de moeda" className="navbar__logo"/>
        <ul className="navbar__links">
          <Link to="/">
              <li>Home</li>
          </Link>
          <Link to="/projetos">
              <li>Projetos</li>
          </Link>
          <Link to="/empresa">
              <li>Empresa</li>
          </Link>
          <Link to="/contato">
              <li>Contato</li>
          </Link>
        </ul>
        <MenuToogle/>
      </header>
)