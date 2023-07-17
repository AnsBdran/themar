import React from 'react';
import { DownArrow } from '../../utils/SVGs';

const Breadcrumbs = () => {
  return (
    <>
      <div className='flex gap-1 items-center text-primary-main'>
        <span>المشتريات</span>
        <DownArrow className='rotate-90' />
        <span>إضافة مشروع</span>
        <DownArrow className='rotate-90' />
        <span className='text-gray-700'>معلومات مالية</span>
      </div>
    </>
  );
};

export default Breadcrumbs;
