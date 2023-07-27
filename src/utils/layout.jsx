import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SidebarLinks from '../components/SidebarLinks';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Header />
      <main className='py-8 '>
        <SidebarLinks className='hidden bg-gray-300 z-20 h-screen md:block fixed top-16 px-6 w-64' />
        <div className='md:pr-64 '>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
