import style from '../components/SubmitButton.module.css'
import PropTypes from 'prop-types'


function SubmitButton({text,modifier}){
    return (
        <button 
            className={`${style.submitButton} ${style[modifier]}`} 
            >{text}
        </button>
    )
}

SubmitButton.propTypes = {
    text:PropTypes.string,
    modifier:PropTypes.string
}

export default SubmitButton