import { FaTrashAlt } from "react-icons/fa";
import style from "./DeleteButton.module.css"

const DeleteButton = ({handle}) => 
    <button className={style.deleteBtn} onClick={handle}>
        <FaTrashAlt/> 
        Excluir
    </button>


export default DeleteButton