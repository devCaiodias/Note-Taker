import { useNavigate } from 'react-router-dom';
import styles from './Taker.module.css'
import { Beer } from 'lucide-react';


function Taker({note, deletOnNote}) {
    const navigate = useNavigate()

    function onSeeDetalhis(note) {
        const query = new URLSearchParams()
        query.set("name", note.name)
        query.set("description", note.description)
        navigate(`/description?${query.toString()}`)
    }

    return (
        <div className={styles.container}>
            {note.map((not, index) => (
                <div key={not.id || index} className={styles.divTaker} >
                        <h1><Beer className={styles.iconBeer} onClick={() => deletOnNote(not.id)} />
                        {not.name}
                        </h1>
                        <p>{not.notee}</p>
                        <button onClick={() => onSeeDetalhis(not)} className={styles.buttonDetalhes}>Detalhes</button>
                    </div>

                    ))}
                
        </div>
    )
}

export default Taker;