import { SalesButton } from '../SalesButton'
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <img src='/images/Logo.png' alt='sales.logo'/>
            </div>         
        </header>
    )
}