import React, { useState } from 'react';
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
  // const hideSidebar = () => {
  //   setShowSidebar(false);
  // };
  return (
    <>
      <header className='shadow-lg bg-white z-20 sticky top-0'>
        <section className=' max-w-8xl sm:px-8 h-16 flex items-center justify-between gap-8 mx-auto lg:pl-24'>
          <div className='flex items-center gap-4 '>
            <Menu
              className='cursor-pointer md:hidden'
              onClick={() => setShowSidebar(true)}
            />
          </div>
          <Link to='/'>
            <Logo />
          </Link>
          <UserInfo className='hidden md:flex flex-1 mr-16' />
          <HeaderIcons className='hidden md:flex ' />
        </section>
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
  <div className={`${className} flex items-center gap-2`}>
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
