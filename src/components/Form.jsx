import { useState } from "react";
import Input from "./Input";

import styles from '../App.module.css'

function Form({onAddNote}) {
    const [name, setName] = useState("")
    const [note, setNote] = useState("")
    const [description, setDescription] = useState("")
    

    return (
        <div>
            <Input 
            type="text"
            placeholder="Enter your Name:"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />

            <Input
            type="text"
            placeholder="Enter Note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            />
            
            <Input 
            type="text"
            placeholder="Enter Description" 
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            <div className={styles.divButton}>
                <button className={styles.button}
                    onClick={() => 
                        {
                            if (!name.trim() || !note.trim() || !description.trim()) {
                            return alert(`Preencha todos os campos pff`)
                        }
                        
                        onAddNote(name, note, description);
                        setName("");
                        setNote("");
                        setDescription("")
                    }
                    }
                >
                Submit your note
                </button>
            </div>


        </div>
    )
}

export default Form;