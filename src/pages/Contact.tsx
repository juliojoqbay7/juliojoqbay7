
import styles from "./Contact.module.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() { // Contact: Contato
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Contact Me</h1> {/* Contact Me: Entre em Contato */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Contact;