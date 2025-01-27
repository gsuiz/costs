
import { useEffect } from 'react'
import NavbarLinks from './NavbarLinks'

export default () => {
    
    function removeOffCanvasMenu(e){
        const menuToggle = document.querySelector(".menuToggle")
        const OffCMenu = document.querySelector(".navbar__links--dropdown") 
        
        if(!(menuToggle.contains(e.target))){
            OffCMenu.classList.remove("show")
            menuToggle.classList.remove("clicked")
        }
    }

    useEffect(() => {
        document.addEventListener("click", removeOffCanvasMenu)

        return () => {
            document.removeEventListener("click",removeOffCanvasMenu)
        }
    })

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