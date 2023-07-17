import React from 'react';
import { Close } from '../utils/SVGs';

const Sidebar = ({
  isShown,
  hideMenu,
  children,
  user: User,
  headerIcons: HeaderIcons,
}) => {
  const positionClass = isShown ? 'right-0' : '-right-full ';
  return (
    <aside
      className={`fixed h-screen z-20 bg-gray-300 top-0 shadow-xl min-w-[300px] ${positionClass} `}
    >
      <div className='px-2 h-16 flex items-center justify-between'>
        <Close className='cursor-pointer' onClick={hideMenu} />
        <HeaderIcons />
      </div>
      <section className='px-4'>
        <User />
        {children}
      </section>
    </aside>
  );
};

export default Sidebar;
