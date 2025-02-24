// Code for the header component
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;