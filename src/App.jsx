import styles from './App.module.css'
import { StickyNote } from 'lucide-react'
import Form from './components/Form'
import { useEffect,useState } from 'react'
import { v4 } from 'uuid'

import Taker from './components/Taker'

function App() {
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem("note")) || []
  )

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note))
    
  }, [note])

  function deletOnNote(noteId) {
    const deletNote = note.filter(notte => notte.id !== noteId)
  
    setNote(deletNote)
  }


function onAddNote(name, notee, description) {
  const newNote = {
    id: v4(),
    name,
    notee,
    description,
    isFavorite: false
    
  }

  setNote([...note, newNote])
}


  return (
    <div>
      <h1 className={styles.title}>Note Taker <span><StickyNote className={styles.iconNote} /></span></h1>
      <Form onAddNote={onAddNote} />
      <Taker note={note} deletOnNote={deletOnNote} />
    </div>
  )
}

export default App
