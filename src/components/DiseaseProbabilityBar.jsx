const DiseaseProbabilityBar = ({ disease, probability, severity = 'low' }) => {
  const severityColors = {
    low: 'bg-yellow-500',
    medium: 'bg-orange-500',
    high: 'bg-red-500',
  };

  const severityColor = severityColors[severity] || severityColors.low;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {disease}
        </span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {probability}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${severityColor} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${probability}%` }}
        />
      </div>
    </div>
  );
};

export default DiseaseProbabilityBar;

