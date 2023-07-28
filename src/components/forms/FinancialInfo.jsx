import React, { useState } from 'react';
import TextField from '../TextField';
import { DownArrow } from '../../utils/SVGs';
import { Link } from 'react-router-dom';

const FinancialInfo = () => {
  return (
    <section>
      <form
        action='
        '
      >
        <div className='space-y-6'>
          <TextField
            label='الدخل السنوي بالريال السعودي'
            placeholder='مثال: 800,000'
          />
          <TextField label='عدد الموظفين' placeholder='مثال: 200' />
          <TextField label='الأصول الحالية' placeholder='الأصول الحالية' />
          <TextField
            label='المطالبات الحالية'
            placeholder='المطالبات الحالية'
          />
          <TextField label='الموقع الإلكتروني' placeholder='www.example.com' />
          <div className='space-y-3'>
            <div className='flex gap-1 items-center'>
              <input
                type='checkbox'
                name='terms'
                id='terms'
                className='appearance-none border-2 border-primary-main p-[7px] rounded checked:bg-primary-main  cursor-pointer'
              />
              <label htmlFor='terms' className='text-text-900  cursor-pointer'>
                أوافق على إصدار سند لأمر كضمان شخصي للتمويل
              </label>
            </div>
            <div className='flex gap-4'>
              <label className='basis-44'>هل تود رهن الأصل؟</label>

              <div className='flex gap-1 items-center'>
                <input type='radio' id='mortgage-yes' name='mortgage' />

                <label htmlFor='mortgage-yes'>نعم</label>
              </div>
              <div className='flex gap-1 items-center'>
                <input type='radio' id='mortgage-no' name='mortgage' />

                <label htmlFor='mortgage-no'>لا</label>
              </div>
            </div>
            <div className='flex gap-4 '>
              <label className='basis-44 '>هل يوجد ضمانات أخرى؟</label>

              <div className='flex gap-1 items-center'>
                <input
                  type='radio'
                  id='guarantee-yes'
                  name='guarantee'
                  value='نعم'
                />

                <label htmlFor='guarantee-yes'>نعم</label>
              </div>
              <div className='flex gap-1 items-center'>
                <input
                  type='radio'
                  id='guarantee-no'
                  name='guarantee'
                  value='لا'
                />

                <label htmlFor='guarantee-no'>لا</label>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-6'>
            {/* <Link
              className='flex gap-2 items-center rounded-3xl py-2 px-6 hover:border-primary-main border border-transparent'
              to='/new-project'
            >
              <DownArrow className='-rotate-90' />
              السابق
            </Link>
            <Link
              className='flex gap-2 items-center bg-primary-main rounded-3xl py-2 px-6 text-white hover:bg-transparent hover:text-primary-main border border-transparent hover:border-primary-main'
              to='/new-project/submit'
            >
              التالي
              <DownArrow className='rotate-90' />
            </Link> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default FinancialInfo;
