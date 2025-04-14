import logo from "../assets/rocket-logo.svg";
import styles from "./Header.module.css";

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo}/>
            <span className={styles.to }>to</span>
            <span className={styles.do}>do</span>
        </header>
    )
}