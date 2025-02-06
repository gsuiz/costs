import styles from './Message.module.css'
import { useState,useEffect } from 'react'

const Message = ({ text,type,messageUpdate }) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if(!text){
            setVisible(false)
            return 
        }
        setVisible(true)

        const timeOut = setTimeout(() => {
            setVisible(false)
            messageUpdate("")
        },3000)


        return () => {
            clearTimeout(timeOut)
        }

    },[text])

    return visible && (
        <div className={`${styles.message} ${styles[type]}`}>
            {text}
        </div>
    )
}   

export default Message