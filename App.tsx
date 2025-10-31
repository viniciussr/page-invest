import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import TeamPage from './pages/TeamPage';
import ContentPage from './pages/ContentPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FixedIncomeCalculatorPage from './pages/FixedIncomeCalculatorPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solucoes" element={<SolutionsPage />} />
            <Route path="/sobre-mim" element={<TeamPage />} />
            <Route path="/conteudo" element={<ContentPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/conteudo/calculadora-renda-fixa" element={<FixedIncomeCalculatorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;