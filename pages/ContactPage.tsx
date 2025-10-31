import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    patrimony: 'Até R$ 1 milhão',
    message: ''
  });
  const [errors, setErrors] = useState<{ email?: string }>({});

  const validateEmail = (email: string): string => {
    if (!email) return "O email é obrigatório.";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Por favor, insira um formato de email válido.";
    }
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      const errorMessage = validateEmail(value);
      setErrors(prev => ({ ...prev, email: errorMessage }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      let v = value.replace(/\D/g, '').substring(0, 11);
      v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
      setFormData(prev => ({ ...prev, phone: v }));
    } else if (name === 'email') {
      setFormData(prev => ({ ...prev, email: value }));
      if (errors.email) {
        setErrors(prev => ({ ...prev, email: validateEmail(value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    const { fullName, email, phone, patrimony, message } = formData;

    const text = `Olá! Gostaria de agendar um diagnóstico de carteira.
    
Nome: ${fullName}
Email: ${email}
Telefone: ${phone}
Patrimônio: ${patrimony}
${message ? `Mensagem: ${message}` : ''}`.trim();

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
     setFormData({
        fullName: '',
        email: '',
        phone: '',
        patrimony: 'Até R$ 1 milhão',
        message: ''
    });
  };


  return (
    <div className="bg-brand-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text">Diagnóstico de Carteira Gratuito</h1>
            <p className="mt-4 text-lg text-brand-text/80">
              Este é o primeiro passo para otimizar sua estratégia de investimentos. Preencha o formulário abaixo para agendar uma conversa estratégica comigo.
            </p>
          </div>

          <div className="mt-12 bg-brand-secondary p-8 sm:p-10 rounded-lg shadow-2xl border border-white/10">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-brand-text/90">Nome Completo</label>
                  <input type="text" name="fullName" id="full-name" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full bg-brand-background border-white/20 rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text/90">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    required 
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    className={`mt-1 block w-full bg-brand-background border rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary ${errors.email ? 'border-red-500' : 'border-white/20'}`} 
                  />
                  {errors.email && <p id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-text/90">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    maxLength={15}
                    placeholder="(XX) XXXXX-XXXX"
                    required 
                    className="mt-1 block w-full bg-brand-background border-white/20 rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="patrimony" className="block text-sm font-medium text-brand-text/90">Patrimônio Investido</label>
                   <select id="patrimony" name="patrimony" value={formData.patrimony} onChange={handleChange} className="mt-1 block w-full bg-brand-background border-white/20 rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary">
                        <option>Até R$ 1 milhão</option>
                        <option>Entre R$ 1 milhão e R$ 5 milhões</option>
                        <option>Entre R$ 5 milhões e R$ 10 milhões</option>
                        <option>Acima de R$ 10 milhões</option>
                   </select>
                </div>
                <div className="sm:col-span-2">
                   <label htmlFor="message" className="block text-sm font-medium text-brand-text/90">Mensagem (opcional)</label>
                   <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-brand-background border-white/20 rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
                </div>
              </div>
              <div className="mt-8 text-right">
                <button 
                  type="submit" 
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-primary hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-secondary focus:ring-brand-primary transition duration-300"
                >
                  Agendar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;