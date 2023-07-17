import React from 'react';

const Footer = () => {
  return (
    <footer className='py-3 md:pr-64 border-t border-text-300'>
      <section className='flex flex-col gap-3 xl:flex-row  justify-between items-center'>
        <p>© حقوق الطبع والنشر 2023 - جميع الحقوق محفوظة لشركة ثمار</p>
        <div className=' flex gap-3 items-center'>
          <a href='#' className='text-bluish-main underline hover:no-underline'>
            الأسئلة الشائعة
          </a>
          <a href='#' className='text-bluish-main underline hover:no-underline'>
            سياسة الخصوصية
          </a>
          <a href='#' className='text-bluish-main underline hover:no-underline'>
            الشروط والأحكام
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
