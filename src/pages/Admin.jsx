import StatCard from '../components/StatCard';
import ChartPlaceholder from '../components/ChartPlaceholder';

const Admin = () => {
  return (
    <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Panel
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage users, monitor system performance, and configure settings.
          </p>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value="1,247"
            icon="👥"
            trend={8.2}
            subtitle="Active accounts"
          />
          <StatCard
            title="Total Scans"
            value="8,934"
            icon="📸"
            trend={15.3}
            subtitle="All time"
          />
          <StatCard
            title="System Uptime"
            value="99.9%"
            icon="⚡"
            subtitle="Last 30 days"
          />
          <StatCard
            title="Avg. Response Time"
            value="1.2s"
            icon="⏱️"
            trend={-5.4}
            subtitle="API response"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartPlaceholder title="User Growth" height="h-80" />
          <ChartPlaceholder title="Scan Volume Trends" height="h-80" />
        </div>

        {/* User Management */}
        <div className="card mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              User Management
            </h2>
            <button className="btn-primary">
              Add User
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Scans
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { id: 1, name: 'Dr. Sarah Johnson', email: 'sarah.j@hospital.com', role: 'Doctor', scans: 342, status: 'Active' },
                  { id: 2, name: 'John Doe', email: 'john.doe@email.com', role: 'Patient', scans: 12, status: 'Active' },
                  { id: 3, name: 'Dr. Michael Chen', email: 'm.chen@hospital.com', role: 'Doctor', scans: 521, status: 'Active' },
                  { id: 4, name: 'Emily Wilson', email: 'emily.w@email.com', role: 'Patient', scans: 5, status: 'Inactive' },
                ].map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {user.scans}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <a href="#" className="text-primary-600 hover:text-primary-900 dark:text-primary-400">
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900 dark:text-red-400">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              System Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Maintenance Mode
                  </span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max File Size (MB)
                </label>
                <input type="number" className="input-field" defaultValue="10" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  API Rate Limit (requests/min)
                </label>
                <input type="number" className="input-field" defaultValue="100" />
              </div>
              <button className="w-full btn-primary">
                Save Settings
              </button>
            </div>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Model Performance
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Overall Accuracy
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    94.2%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Model Version
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    v2.1.3
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Training
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    2024-01-10
                  </span>
                </div>
              </div>
              <button className="w-full btn-secondary">
                Retrain Model
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Admin;

