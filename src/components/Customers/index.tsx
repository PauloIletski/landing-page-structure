import styles from './styles.module.scss'

export function Customers(){
    return (
        <section className={styles.customerContainer}>
            <img className={styles.wavesImage} src="/images/waves.svg" alt="ondas"/>
            <div className={styles.titleContainer}>
                <h1><span>Alunas que fizeram e</span> Aprovam o curso</h1>
                <p>Você vai ser a próxima</p>

            </div>


        </section>
    )
}