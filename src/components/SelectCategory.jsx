
import style from '../routes/NewProject.module.css'
import { useState,useEffect } from 'react'

export default () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const requireCategories = async() => {
            const response = await fetch("http://localhost:5000/categories")
            setCategories(await response.json())
        }

        requireCategories()
    },[])

    return (
        <select className={style.singleForm__select} id="category" defaultValue="" required>
            <option value="" disabled>Selecione uma opção:</option>
            {categories.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
        </select>
    )
}