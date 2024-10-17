import styles from './Input.module.css'

function Input(props) {
    return (
        <div className={styles.div}><input className={styles.input} {...props} /></div>
    )
}

export default Input;