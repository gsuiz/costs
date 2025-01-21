import style from '../routes/NewProject.module.css'


export default ({text}) => (
    <button 
        className={style.singleForm__button} 
        id="button"
        >{text}
    </button>
)
