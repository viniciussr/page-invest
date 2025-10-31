
import React from 'react';

interface RiskRatingProps {
  level: number;
  levelsCount?: number;
}

const RiskRating: React.FC<RiskRatingProps> = ({ level, levelsCount = 8 }) => {
  const getRiskColor = (index: number) => {
    const percentage = (index + 1) / levelsCount;
    if (percentage <= 0.3) return 'bg-green-500';
    if (percentage <= 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const riskLabels = ['Conservador', 'Moderado', 'Arrojado'];
  const getLabel = () => {
    const percentage = level / levelsCount;
    if (percentage <= 0.3) return riskLabels[0];
    if (percentage <= 0.6) return riskLabels[1];
    return riskLabels[2];
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-brand-text">Classificação de Risco</span>
        <span className="text-sm font-bold text-brand-primary">{getLabel()}</span>
      </div>
      <div className="flex space-x-1 w-full">
        {Array.from({ length: levelsCount }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full ${i < level ? getRiskColor(i) : 'bg-gray-200'}`}
            title={`Nível de risco ${i + 1} de ${levelsCount}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RiskRating;