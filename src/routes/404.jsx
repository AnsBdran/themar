import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <section className='max-w-6xl mx-auto flex flex-col md:flex-row items-center p-24 text-center h-screen'>
      <div className='flex-1'>
        <h1 className='leading-relaxed'>الصفحة المطلوبة غير متوفرة حالياً</h1>
        <div>
          <Link
            className='mx-auto w-max mt-8 bg-primary-main text-white py-3 px-8 rounded-lg shadow-xl block'
            to='/'
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
      <div className='flex-1 bg-blue-200 '>
        <img src='/assets/404.png' alt='404 error' />
      </div>
    </section>
  );
};

export default Error404;
