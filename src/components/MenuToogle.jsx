
export default () => {
    function handleClick(e){
        e.currentTarget.classList.toggle("clicked")
    }

    return (
        <div className="menuToggle" onClick={handleClick}>
            <div class="menuToggle__line"></div>
            <div class="menuToggle__line"></div>
            <div class="menuToggle__line"></div>
        </div>

    )
}