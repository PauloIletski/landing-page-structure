import { SalesButton } from '../SalesButton'
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <img src='' alt='sales.logo'/>
            <SalesButton/>
        </header>
    )
}