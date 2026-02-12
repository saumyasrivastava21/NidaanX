import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{"role": "patient"}');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar userRole={user.role} />
        <div className="flex-1">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

