import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.logos}>
                <img src="/images/SIGA.png" alt="LOGO SIGA" /> 
                <img src="/images/UPE.png" alt="LOGO UNIVERSIDADE DE PERNAMBUCO" />
            </div>
            <div className={styles.leftside}>
                <p>Mapeamento das condições socioeconômicas</p>
                <p>Acessibilidade: </p>
            </div>
        </header>
    )
}