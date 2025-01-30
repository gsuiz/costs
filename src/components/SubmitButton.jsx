import style from '../components/SubmitButton.module.css'
import PropTypes from 'prop-types'


function SubmitButton({ handle,text,modifier }){
    return (
        <button 
            className={`${style.submitButton} ${style[modifier]}`}
            onClick={handle}
        >
            {text}
        </button>
    )
}

SubmitButton.propTypes = {
    handle:PropTypes.func,
    text:PropTypes.string,
    modifier:PropTypes.string
}

export default SubmitButton