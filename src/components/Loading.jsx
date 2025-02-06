import Svg from '../assets/loading.svg';
import styles from '../routes/Projects.module.css';

const Loading = () => {
    return (
        <div className={styles.project__loading}>
            <img src={Svg}/>
        </div>
    )
}

export default Loading