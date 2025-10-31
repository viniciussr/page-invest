import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-brand-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg text-brand-text/80 prose-headings:text-brand-text prose-a:text-brand-primary prose-strong:text-brand-text">
          <h1 className="text-4xl font-extrabold">Política de Privacidade e Tratamento de Dados (LGPD)</h1>
          <p className="lead">
            A sua privacidade é importante para mim. É minha política respeitar a sua privacidade em relação a qualquer informação sua que eu possa coletar no meu site.
          </p>
          
          <h2>1. Coleta de Dados</h2>
          <p>
            Solicito informações pessoais apenas quando realmente preciso delas para lhe fornecer um serviço. Faço-o por meios justos e legais, com o seu conhecimento e consentimento. Também informo por que estou coletando e como será usado.
          </p>
          <p>
            Os dados coletados através dos meus formulários (Nome, Email, Telefone) são utilizados exclusivamente para o contato inicial sobre meus serviços de assessoria e diagnóstico financeiro.
          </p>

          <h2>2. Uso e Armazenamento de Dados</h2>
          <p>
            Apenas retenho as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazeno dados, protejo dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            Não compartilho informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou em caso de parceria com a corretora (ex: XP Investimentos) para a efetivação dos serviços contratados, sempre com o seu consentimento explícito.
          </p>

          <h2>4. Seus Direitos (LGPD)</h2>
          <p>
            Você tem o direito de:
          </p>
          <ul>
            <li><strong>Visualizar:</strong> Solicitar uma cópia de todos os dados pessoais que tenho sobre você.</li>
            <li><strong>Baixar:</strong> Solicitar um arquivo exportado com os seus dados pessoais.</li>
            <li><strong>Excluir:</strong> Solicitar a exclusão de seus dados pessoais de meus sistemas.</li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, entre em contato comigo através do email: <a href="mailto:lgpd@mayarateles.invest" className="hover:underline">lgpd@mayarateles.invest</a>.
          </p>

          <h2>5. Cookies</h2>
          <p>
            O meu site pode usar cookies para melhorar a experiência do usuário. Um cookie é um pequeno arquivo de texto que um site armazena no seu computador ou dispositivo móvel quando você visita o site. Você pode configurar seu navegador para recusar cookies, mas isso pode impedir que você use algumas partes do meu site.
          </p>
          
          <p>
            Esta política é efetiva a partir de {new Date().toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;