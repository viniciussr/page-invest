import type { NavLink, Service, TeamMember, LeadMagnet } from './types';
import { ShieldCheckIcon, BanknotesIcon, ChartPieIcon, TrendingUpIcon } from './components/Icons';

export const OFFICE_NAME = "Mayara Teles | Assessora de Investimentos";

export const NAV_LINKS: NavLink[] = [
  { label: 'Soluções & Expertise', path: '/solucoes' },
  { label: 'Sobre Mim', path: '/sobre-mim' },
  { label: 'Conteúdo', path: '/conteudo' },
];

export const WHATSAPP_NUMBER = '5521980220193'; // 55 (DDI) + 21 (DDD) + 980220193 (Número)

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mayarateles.xp/',
  linkedin: 'https://www.linkedin.com/in/mayara-teles-a7a858109/',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const SERVICES: Service[] = [
  {
    icon: ShieldCheckIcon,
    title: 'Wealth Planning & Sucessão Patrimonial',
    description: 'Desenvolvo estratégias personalizadas para a perpetuação do seu patrimônio, garantindo segurança e tranquilidade para as futuras gerações através de holdings familiares e outros instrumentos jurídicos.',
  },
  {
    icon: ChartPieIcon,
    title: 'Alocação de Ativos Estratégica',
    description: 'Desenho uma carteira de investimentos diversificada e sob medida para seus objetivos, balanceando risco e retorno para otimizar seu crescimento patrimonial no Brasil e no exterior.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Planejamento para Aposentadoria',
    description: 'Construo um plano sólido para o seu futuro, combinando as melhores estratégias de previdência privada (PGBL/VGBL) e investimentos de longo prazo para garantir sua independência financeira.',
  },
  {
    icon: BanknotesIcon,
    title: 'Consultoria em Renda Fixa e Variável',
    description: 'Ofereço uma análise detalhada para selecionar os melhores produtos de renda fixa e as oportunidades mais promissoras em ações, fundos imobiliários e outros ativos.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
    photoUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mayara Teles',
    credentials: ['Assessora de Investimentos', 'CFA Charterholder', 'CFP®', 'Certificada CVM/ANCORD']
  }
];

// Helper to create CSV data URI
const createCsvDataUri = (data: string[][]): string => {
  const csvContent = data.map(e => e.join(",")).join("\n");
  return "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
};

// Data for the financial planning spreadsheet
const planningSheetData: string[][] = [
  ["Objetivo", "Valor Alvo (R$)", "Prazo (Anos)", "Investimento Inicial (R$)", "Aporte Mensal (R$)", "Taxa de Juros Anual (%)"],
  ["Reserva de Emergência", "30000", "1", "5000", "2000", "10"],
  ["Compra de Imóvel", "500000", "10", "100000", "1500", "9"],
  ["Aposentadoria", "2000000", "30", "50000", "1000", "11"],
];


export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    type: 'Calculadora Financeira',
    title: 'Calculadora de Renda Fixa: CDB vs. LCI/LCA',
    description: 'Descubra qual investimento oferece a melhor rentabilidade líquida para o seu perfil. Compare o retorno de um CDB com a isenção de imposto de uma LCI/LCA.',
    disclaimer: 'Ferramenta para fins educacionais. A rentabilidade passada não é garantia de resultados futuros. Consulte sempre um especialista.',
    path: '/conteudo/calculadora-renda-fixa',
    isDownload: false,
  },
  {
    type: 'Planilha Exclusiva',
    title: 'Planilha de Planejamento Financeiro para Metas',
    description: 'Organize seus investimentos e trace um plano claro para alcançar seus objetivos, seja a compra de um imóvel, a aposentadoria ou a viagem dos sonhos.',
    disclaimer: 'Este material é uma ferramenta de apoio e não substitui uma assessoria de investimentos profissional. Os resultados são baseados nas informações inseridas pelo usuário.',
    path: createCsvDataUri(planningSheetData),
    isDownload: true,
    downloadFilename: 'planejamento-financeiro.csv',
  }
];