import StatCard from '../components/StatCard';
import ChartPlaceholder from '../components/ChartPlaceholder';

const Dashboard = () => {
  return (
    <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome back! Here's an overview of your activity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Scans"
            value="127"
            icon="📸"
            trend={12}
            subtitle="This month"
          />
          <StatCard
            title="Detected Cases"
            value="43"
            icon="🔍"
            trend={8}
            subtitle="Positive findings"
          />
          <StatCard
            title="Accuracy Rate"
            value="94.2%"
            icon="✅"
            trend={2.1}
            subtitle="Model performance"
          />
          <StatCard
            title="Pending Reviews"
            value="7"
            icon="⏳"
            subtitle="Awaiting analysis"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartPlaceholder title="Diagnosis Trends" height="h-80" />
          <ChartPlaceholder title="Disease Distribution" height="h-80" />
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Scans
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Patient ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Findings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { id: '1', date: '2024-01-15', patientId: 'P-001234', status: 'Completed', findings: 'Pneumonia (85%)' },
                  { id: '2', date: '2024-01-14', patientId: 'P-001233', status: 'Completed', findings: 'Normal (92%)' },
                  { id: '3', date: '2024-01-14', patientId: 'P-001232', status: 'Pending', findings: '-' },
                  { id: '4', date: '2024-01-13', patientId: 'P-001231', status: 'Completed', findings: 'Tuberculosis (67%)' },
                ].map((scan) => (
                  <tr key={scan.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {scan.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {scan.patientId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          scan.status === 'Completed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                      >
                        {scan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {scan.findings}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary-600 hover:text-primary-900 dark:text-primary-400">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;

