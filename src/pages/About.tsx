
import styles from "./About.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Sobre mim</h1>
                <p>Olá! Meu nome é Julio Joqbay e sou desenvolvedor front-end. Atualmente, estou estudando React e Next.js.</p>
            </main>
            <Footer />
        </>
    );
}

export default About;