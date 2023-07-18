import React from 'react';
import { Add, DownArrow, UnreadNotification } from '../utils/SVGs';
import Table from '../components/Table';
import ProjectDetails from '../components/ProjectDetails';
import { Link } from 'react-router-dom';

const Expenses = () => {
  return (
    <>
      <section className='shadow-lg pb-4'>
        <div className='max-w-5xl px-3 lg:px-6 xl:px-12 mx-auto'>
          <h1 className='text-primary-main'>المشتريات</h1>
          <div className='flex flex-col  items-center gap-4 sm:flex-row justify-between'>
            <div className='flex text-primary-main items-center'>
              <span>المشتريات</span>
              <DownArrow className='rotate-90' />
              <span>TMP23001</span>
              <DownArrow className='rotate-90' />
              <span className='text-gray-700'>تفاصيل المشروع</span>
            </div>
            <Link to='/new-project'>
              <button className='bg-gray-700 text-white items-center rounded-3xl py-2 px-4'>
                إضافة مشروع جديد
                <Add className='inline' />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className='mt-8 max-w-5xl mx-auto '>
        <div className='bg-notification flex gap-3 py-5 px-4 text-text-700'>
          <UnreadNotification />
          <span>يرجى استكمال الملفات المطلوبة</span>
          <a
            href='#'
            className='text-primary-main underline hover:no-underline'
          >
            اضغط هنا
          </a>
        </div>
        <Table />
        <ProjectDetails />
      </section>
    </>
  );
};

export default Expenses;
