import { useState } from 'react';
import {
  DownArrow,
  Logo,
  Menu,
  Notification,
  User,
  VerticalSeparator,
} from '../utils/SVGs';
import Sidebar from './Sidebar';
import SidebarLinks from './SidebarLinks';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleHideMenu = () => setShowSidebar(false);

  return (
    <>
      <header className='shadow-lg bg-white z-20 sticky top-0  py-1 '>
        {/* header for mobiles */}
        <div className='md:hidden flex justify-between items-center px-3'>
          <Menu
            className='cursor-pointer md:hidden'
            onClick={() => setShowSidebar(true)}
          />
          <Logo />
        </div>
        {/* header for large screens */}
        <div className='hidden md:flex'>
          <Link to='/' className='hidden md:inline  basis-64'>
            <Logo />
          </Link>
          <div className='flex max-w-5xl flex-1 mx-auto md:px-3 lg:px-6 xl:px-12'>
            <Menu
              className='cursor-pointer md:hidden'
              onClick={() => setShowSidebar(true)}
            />
            <Link to='/' className='md:hidden'>
              <Logo />
            </Link>
            <UserInfo className='hidden md:flex flex-1 ' />
            <HeaderIcons className='hidden md:flex ' />
          </div>
        </div>
      </header>
      <Sidebar
        isShown={showSidebar}
        hideMenu={handleHideMenu}
        headerIcons={HeaderIcons}
        user={UserInfo}
      >
        <SidebarLinks hideMenu={handleHideMenu} />
      </Sidebar>
    </>
  );
};

export default Header;

const UserInfo = ({ className }) => (
  <div className={`${className} flex items-center gap-2 `}>
    <div className='rounded-full border-2 p-2 border-primary-main bg-primary-light'>
      <User />
    </div>
    <div className='leading-5'>
      <h6>خديجة محمد</h6>
      <p className='text-text-300 text-sm text-center'>طالب تمويل</p>
    </div>
    <DownArrow className='text-text-300 mr-2' />
  </div>
);

const HeaderIcons = ({ className }) => (
  <div className={`${className} flex gap-3 items-center`}>
    <Notification />
    <VerticalSeparator />
    <p className='border-b-2 pb-2 text-text-200 border-gray-700 text-xl'>EN</p>
  </div>
);

// return (
//   <>
//     <header className='shadow-lg bg-white z-20 sticky top-0 '>
//       <Link to='/' className='hidden md:inline-block'>
//         <Logo />
//       </Link>
//       <section className='md:pr-64'>
//         {/* <section className=' max-w-8xl sm:px-8 h-16 flex items-center justify-between gap-8 mx-auto '> */}
//         {/* <div className='flex items-center gap-4 '> */}
//           <Menu
//             className='cursor-pointer md:hidden'
//             onClick={() => setShowSidebar(true)}
//           />
//         {/* </div> */}
//         <Link to='/' className='md:hidden'>
//           <Logo />
//         </Link>
//         <UserInfo className='hidden md:flex flex-1 lg:mr-56' />
//         <HeaderIcons className='hidden md:flex ' />
//       </section>
//       {/* </section> */}
//     </header>
//     <Sidebar
//       isShown={showSidebar}
//       hideMenu={handleHideMenu}
//       headerIcons={HeaderIcons}
//       user={UserInfo}
//     >
//       <SidebarLinks hideMenu={handleHideMenu} />
//     </Sidebar>
//   </>
// );
// };
