
import { Link } from 'react-router-dom'

export default ({ classDescription }) => (
    <ul className={ classDescription }>
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
)