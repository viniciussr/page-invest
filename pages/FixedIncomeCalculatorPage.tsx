import React, { useState, useMemo } from 'react';

const InputField = ({ label, type = 'number', value, onChange, placeholder, unit, step = "0.01" }) => (
  <div>
    <label className="block text-sm font-medium text-brand-text/90">{label}</label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step={step}
        min="0"
        className="block w-full bg-brand-background border-white/20 rounded-md py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary pr-16"
      />
      {unit && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span className="text-gray-400 sm:text-sm">{unit}</span>
      </div>}
    </div>
  </div>
);

const ResultCard = ({ title, netValue, grossValue, tax, isWinner }) => (
  <div className={`bg-brand-background p-6 rounded-lg border-2 ${isWinner ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-white/20'}`}>
    <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-brand-text">{title}</h3>
        {isWinner && <span className="text-xs font-bold bg-green-500 text-white py-1 px-2 rounded-full">MELHOR OPÇÃO</span>}
    </div>
    <div className="mt-4 space-y-2">
      <p className="flex justify-between text-brand-text/80"><span>Rendimento Bruto:</span> <span className="font-semibold text-brand-text">R$ {grossValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
      <p className="flex justify-between text-brand-text/80"><span>Imposto de Renda:</span> <span className="font-semibold text-red-400">- R$ {tax.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
      <hr className="border-white/10 my-2" />
      <p className="flex justify-between text-lg font-bold text-brand-primary"><span>Rendimento Líquido:</span> <span>R$ {netValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
    </div>
  </div>
);

const FixedIncomeCalculatorPage: React.FC = () => {
  const [amount, setAmount] = useState('10000');
  const [days, setDays] = useState('365');
  const [cdiRate, setCdiRate] = useState('10.40');
  const [cdbRate, setCdbRate] = useState('110');
  const [lciRate, setLciRate] = useState('95');

  const parsedDays = parseInt(days, 10) || 0;

  const incomeTaxRate = useMemo(() => {
    if (parsedDays <= 180) return 0.225;
    if (parsedDays <= 360) return 0.20;
    if (parsedDays <= 720) return 0.175;
    return 0.15;
  }, [parsedDays]);

  const results = useMemo(() => {
    const nAmount = parseFloat(amount) || 0;
    const nDays = parseInt(days, 10) || 0;
    const nCdiRate = parseFloat(cdiRate) || 0;
    const nCdbRate = parseFloat(cdbRate) || 0;
    const nLciRate = parseFloat(lciRate) || 0;
    
    if (nAmount <= 0 || nDays <= 0 || nCdiRate <=0) {
      return { cdb: { net: 0, gross: 0, tax: 0 }, lci: { net: 0, gross: 0, tax: 0 } };
    }

    const cdiDaily = Math.pow(1 + nCdiRate / 100, 1 / 252) - 1;
    const businessDays = nDays * (252 / 365);
    const accumulatedCdiRate = Math.pow(1 + cdiDaily, businessDays) - 1;

    // CDB Calculation
    const cdbGrossReturn = nAmount * (accumulatedCdiRate * (nCdbRate / 100));
    const cdbTax = cdbGrossReturn * incomeTaxRate;
    const cdbNetReturn = cdbGrossReturn - cdbTax;

    // LCI/LCA Calculation
    const lciGrossReturn = nAmount * (accumulatedCdiRate * (nLciRate / 100));
    const lciTax = 0;
    const lciNetReturn = lciGrossReturn;

    return {
      cdb: { net: cdbNetReturn, gross: cdbGrossReturn, tax: cdbTax },
      lci: { net: lciNetReturn, gross: lciGrossReturn, tax: lciTax },
    };
  }, [amount, days, cdiRate, cdbRate, lciRate, incomeTaxRate]);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
        setter(value);
    }
  };

  const winner = results.cdb.net > results.lci.net ? 'cdb' : (results.lci.net > results.cdb.net ? 'lci' : 'none');

  return (
    <div className="bg-brand-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text">Calculadora de Renda Fixa</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80">
            Compare a rentabilidade líquida entre um CDB e uma LCI/LCA e tome a melhor decisão para seus investimentos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-brand-secondary p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-brand-text mb-6">Parâmetros</h2>
            <div className="space-y-4">
              <InputField label="Valor a Investir" value={amount} onChange={handleInputChange(setAmount)} placeholder="10000" unit="R$" />
              <InputField label="Prazo (dias corridos)" value={days} onChange={handleInputChange(setDays)} placeholder="365" unit="dias" type="number" step="1" />
              <InputField label="Taxa DI (CDI) Anual" value={cdiRate} onChange={handleInputChange(setCdiRate)} placeholder="10.40" unit="% a.a." />
              <InputField label="Taxa do CDB" value={cdbRate} onChange={handleInputChange(setCdbRate)} placeholder="110" unit="% do CDI" />
              <InputField label="Taxa da LCI/LCA" value={lciRate} onChange={handleInputChange(setLciRate)} placeholder="95" unit="% do CDI" />
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 bg-brand-secondary p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-brand-text mb-6">Resultado da Simulação</h2>
            {(parseFloat(amount) > 0 && parseInt(days, 10) > 0) ? (
                <div className="space-y-6">
                <ResultCard 
                    title="CDB" 
                    netValue={results.cdb.net} 
                    grossValue={results.cdb.gross} 
                    tax={results.cdb.tax}
                    isWinner={winner === 'cdb'}
                />
                <ResultCard 
                    title="LCI / LCA" 
                    netValue={results.lci.net} 
                    grossValue={results.lci.gross} 
                    tax={results.lci.tax}
                    isWinner={winner === 'lci'}
                />
                 <div className="text-center pt-4">
                    <p className="text-sm text-brand-text/60">
                        Alíquota do IR para o CDB: <strong className="text-brand-text/90">{(incomeTaxRate * 100).toFixed(1)}%</strong> para {days} dias.
                    </p>
                 </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-full min-h-[200px]">
                    <p className="text-brand-text/80 text-center">Preencha os valores ao lado para ver o resultado da simulação.</p>
                </div>
            )}
          </div>
        </div>
        <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-xs text-brand-text/60">
                <strong>Aviso Legal:</strong> Esta calculadora é uma ferramenta para fins educacionais e de simulação. Os cálculos são baseados nas informações inseridas e em premissas de mercado que podem variar (como a convenção de 252 dias úteis no ano). A rentabilidade passada não é garantia de resultados futuros. Para uma decisão de investimento, consulte sempre sua assessora.
            </p>
        </div>
      </div>
    </div>
  );
};

export default FixedIncomeCalculatorPage;