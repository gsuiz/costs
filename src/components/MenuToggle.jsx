
import NavbarLinks from './NavbarLinks'

export default () => {
    function handleClick(e){
        e.currentTarget.classList.toggle("clicked")
        const navLinks = e.currentTarget.nextSibling
        navLinks.classList.toggle("show")
    }

    return (
        <>
            <div className="menuToggle" onClick={handleClick}>
                <div className="menuToggle__line"></div>
                <div className="menuToggle__line"></div>
                <div className="menuToggle__line"></div>
            </div>
            <NavbarLinks classDescription={ "navbar__links navbar__links--dropdown" }/>
        </>
    )
}