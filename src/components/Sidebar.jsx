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
      className={`fixed z-20 bg-gray-300 top-0 bottom-0 shadow-xl  min-w-[300px] ${positionClass} md:hidden overflow-auto `}
    >
      {/* <div className='px-2'> */}
      <div className='px-2 h-16 flex items-center justify-between mb-4 '>
        <Close className='cursor-pointer' onClick={hideMenu} />
        <HeaderIcons />
      </div>
      {/* </div> */}
      <div className='px-8'>
        <User />
      </div>
      {children}
    </aside>
  );
};

export default Sidebar;
