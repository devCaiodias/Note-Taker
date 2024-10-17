import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Description.module.css'

function Description() {
    const navigate = useNavigate()

    const [sershParams] = useSearchParams()

    const name = sershParams.get("name")
    const description = sershParams.get("description")

    return (
        <div className={styles.divContainer}>
            <h1 className={styles.hDescription}>Description</h1>

            <div className={styles.divDescription}>
                <h2>Name: {name}</h2>
                <h3>description: {description}</h3>
            </div>

            <button onClick={() => navigate(-1)} className={styles.back}>BACK</button>
        </div>

        
    )
}


export default Description;