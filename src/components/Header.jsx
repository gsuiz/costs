
import MenuToggle from "./MenuToggle"
import NavbarLinks from "./NavbarLinks"
import costsLogo from "../assets/costs_logo.png"
import { Link } from "react-router-dom"


export default () => (
    <header>
        <nav className="navbar">
            <Link to={"/"}>
                <img src={costsLogo} className="navbar__logo"/>
            </Link>
            <NavbarLinks classDescription={"navbar__links"}/>
            <MenuToggle/>
        </nav>
    </header>
)