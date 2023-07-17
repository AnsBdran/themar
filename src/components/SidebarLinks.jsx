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
    <div className={`py-4 text-text-400 ${className}`}>
      <nav className='space-y-5 border-b pb-8'>
        <LinkWithIcon
          title='موَّل مشترياتك'
          icon={LogoSecondary}
          className='font-bold'
        />
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
        <LinkWithIcon
          to='logout'
          title='تسجيل الخروج'
          icon={Logout}
          className='text-reddish-main mt-12 text-lg hover:text-reddish-main'
        />
      </div>
    </div>
  );
};

export default SidebarLinks;
