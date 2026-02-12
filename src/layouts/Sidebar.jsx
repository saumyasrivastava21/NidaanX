import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ userRole = 'patient' }) => {
  const location = useLocation();
  const isAdmin = userRole === 'admin' || userRole === 'doctor';

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/upload', label: 'Upload X-Ray', icon: '📤' },
    { path: '/history', label: 'Patient History', icon: '📋' },
    ...(isAdmin ? [{ path: '/admin', label: 'Admin Panel', icon: '⚙️' }] : []),
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-full pt-6">
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

