import styles from './styles.module.css'
import LogoInCicle from '../../assets/logo-incicle.svg'
export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                 <img src={LogoInCicle} alt="Logo InCicle" />
            </div>
        </header>
    )
}