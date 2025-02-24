import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {  // ContactForm: Formulário de Contato
  const [name, setName] = useState(''); // name: nome
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // message: mensagem
  const [isSending, setIsSending] = useState(false); // isSending: enviando
  const [success, setSuccess] = useState(false); // success: sucesso
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => { // handleSubmit: lidar com o envio
    event.preventDefault();
    setIsSending(true);
    setError(''); // Clear previous errors / Limpa erros anteriores

    // --- Sending logic (simulated - replace with your actual logic) ---
    // --- Lógica de envio (simulada - substitua por sua lógica real) ---
    try {
      // Example with fetch (adapt to your backend/service)
      // Exemplo com fetch (adapte para seu backend/serviço)
      const response = await fetch('/api/send-email', { // Fictitious route / Rota fictícia
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle response errors (e.g., 400, 500)
        // Trata erros de resposta (ex: 400, 500)
        const data = await response.json();  // If the backend returns error details / Se o backend retornar detalhes do erro.
        setError(data.message || 'Error submitting the form.'); // Error submitting the form: Erro ao enviar o formulário
      }
    } catch (error) {
      // Handle network errors, etc. / Trata erros de rede, etc.
      setError('Erro ao enviar. Cheque sua conexão.'); // Error submitting the form. Check your connection: Erro ao enviar o formulário. Verifique sua conexão.
      console.error("Erro de envio:", error); // Error sending: Erro no envio
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {success && <p className={styles.success}>Mensagem enviada com sucesso!</p>} {/* Message sent successfully!: Mensagem enviada com sucesso! */}
      {error && <p className={styles.error}>{error}</p>}

      <div>
        <label htmlFor="name">Nome:</label> {/* Name: Nome */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensagem:</label> {/* Message: Mensagem */}
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isSending}>
        {isSending ? 'Enviando...' : 'Enviar'} {/* Sending...: Enviando... / Send: Enviar */}
      </button>
    </form>
  );
}

export default ContactForm;