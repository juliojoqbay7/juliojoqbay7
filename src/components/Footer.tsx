
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Julio Joqbay - Todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;