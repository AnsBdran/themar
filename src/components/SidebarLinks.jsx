import React, { useState } from 'react';
import {
  Card,
  CardSecondary,
  Cart,
  Chat,
  DownArrow,
  Info,
  LogoSecondary,
  Logout,
  PersonMoney,
} from '../utils/SVGs';
import { NavLink } from 'react-router-dom';

const SidebarLinks = ({ hideMenu, className }) => {
  const [collapsing, setCollapsing] = useState(false);
  const toggleCollapsing = () => {
    setCollapsing((prev) => !prev);
  };

  const LinkWithIcon = ({ title, icon: Icon, className, to }) => (
    <NavLink
      to={to}
      className={`${className} flex gap-2 items-center hover:text-primary-main cursor-pointer`}
      onClick={hideMenu}
    >
      <Icon />
      <span>{title}</span>
    </NavLink>
  );

  const Link = ({ children }) => (
    <a href='#' className='hover:text-primary-main' onClick={hideMenu}>
      {children}
    </a>
  );

  return (
    <section className={` h-full ${className}`}>
      <div className={` px-8 pt-8 text-text-400 `}>
        <nav className='space-y-5 border-b border-text-300 pb-8'>
          <NavLink
            to='paay'
            className={`font-bold flex gap-2 items-center text-black cursor-pointer `}
            onClick={hideMenu}
          >
            <LogoSecondary />
            <span className='text-text-400'>موّل مشترياتك</span>
          </NavLink>
          <LinkWithIcon to='/expenses' title='المشتريات' icon={Cart} />
          <LinkWithIcon to='payment' title='معلومات الدفع' icon={Card} />
          <LinkWithIcon to='import' title='الموردين' icon={PersonMoney} />
          <LinkWithIcon to='info' title='معلوماتي' icon={CardSecondary} />
          <LinkWithIcon to='complaint' title='الشكاوي' icon={Chat} />
        </nav>
        <div>
          <div
            className='flex gap-1 items-center mt-4 hover:text-primary-main cursor-pointer w-max'
            onClick={toggleCollapsing}
          >
            <Info />
            <span>عن ثمار</span>
            <DownArrow
              className={`transition-all ${
                collapsing ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
          <div
            className={`gap-3 pr-3 pt-4 flex flex-col transition-all ${
              collapsing ? 'collapsed-menu' : 'shown-menu'
            }`}
          >
            <Link>معلومات عنا</Link>
            <Link>متوافقة مع الشريعة</Link>
            <Link>تمويل المشتريات</Link>
            <Link>التصنيف الإتماني</Link>
            <Link>مركز الوسائط</Link>
            <Link>المدونة</Link>
          </div>
        </div>
        <div className='absolute bottom-8 md:bottom-28 right-8'>
          <LinkWithIcon
            to='logout'
            title='تسجيل الخروج'
            icon={Logout}
            className='text-reddish-main text-lg hover:text-reddish-main'
          />
        </div>
      </div>
    </section>
  );
};

export default SidebarLinks;
