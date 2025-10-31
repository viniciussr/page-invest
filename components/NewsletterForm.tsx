
import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    try {
      // NOTE: This assumes a serverless function is deployed at this endpoint.
      // You would need to set this up in your hosting provider (e.g., Vercel, Netlify).
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Ocorreu um erro. Tente novamente.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Falha na comunicação com o servidor.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-center text-green-400 font-medium">
        Inscrição confirmada! Obrigado por se juntar à nossa newsletter.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="flex-grow w-full bg-brand-background border-white/20 rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="bg-brand-primary text-white font-bold py-2 px-4 rounded-md text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-400 text-left">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;