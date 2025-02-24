
import styles from './Home.module.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Julio Joqbay</h1>
                <p>Desenvolvedor Front-end</p>
            </main>
            <Footer />
        </>
    );
}

export default Home;