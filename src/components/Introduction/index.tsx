import styles from './styles.module.scss'

export function Introduction(){
    return (
        <section>
            <img className={styles.cloudImage} src="/images/cloud.svg" alt="nuvens"/>
            <div className={styles.introductionContainer}>
                <div className={styles.introductionLayout}>
                    <img src="/images/Ativo-1.png" alt="imagem-ativo-1"/>
                    <div className={styles.textContainer}>
                        <span>Escola de designer de unhas</span>
                        <h2>Primeiro curso de Alongamento de Unhas Avançado, <span>com acesso vitalício e 2 certificados!</span></h2>
                        <p>Todas as aulas foram pensadas e desenvolvidas de forma minuciosa para que você aprenda tudo e se torne uma verdadeira especialista em Alongamento de Unhas, mesmo que esteja começando do zero.</p>
                        <p>Um curso criado exclusivamente para você que deseja transformar sua vida profissional através do design de Unhas.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}