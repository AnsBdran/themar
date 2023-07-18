import React from 'react';
import TextField from '../TextField';
import { DownArrow } from '../../utils/SVGs';
import { Link } from 'react-router-dom';

const PurchaseInfo = () => {
  return (
    <section>
      <form action='' className='space-y-12'>
        <div className='space-y-6'>
          <h2 className='mb-2'>معلومات الشراء</h2>

          <TextField placeholder='نوع المشتريات' label='نوع المشتريات' />
          <TextField placeholder='اختر الملف' label='عرض السعر' sizeWarn />
          <TextField
            placeholder='مثال: 350,000'
            label='مبلغ المشتريات بالريال السعودي'
            helperText='مبلغ المشتريات للمنشأة من 100 ألف ريال سعودي إلى 500 ألف ريال سعودي'
          />
          <TextField placeholder='' select label='فترة السداد بالأشهر'>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </TextField>
        </div>

        <div className='border border-text-300 rounded-2xl p-6'>
          <h2>حاسبة القسط الشهري التقريبية</h2>
          <div className='flex gap-4 items-center text-gray-700 mt-4'>
            <Detail q='مبلغ المشتريات' value='0.00 ر.س' />
            +
            <Detail q='المرابحة' value='0.00 ر.س' />
            =
            <Detail q='المبلغ الكلي' value='0.00 ر.س' />
          </div>
          <div className='flex gap-4 mt-6 mb-6'>
            <Detail q='القسط الشهري' value='0.00 ر.س' terms />
          </div>
          <div className='flex gap-4 mt-6 mb-6'>
            <Detail q='الرسوم الإدارية' value='0.00 ر.س' terms />
          </div>
        </div>
        <div className='space-y-6'>
          <h2>معلومات المورد</h2>
          <TextField
            label='اسم المنشأة الموردة'
            placeholder='اسم المنشأة الموردة'
          />
          <TextField label='اسم المسؤول' placeholder='اسم المسؤول' />
          <TextField label='القطاع' placeholder='القطاع' />
          <TextField
            label='البريد الإلكتروني'
            placeholder='email@address.com'
          />
          <TextField label='رقم الجوال' placeholder='' />
          <TextField
            label='شهادة الحساب البنكي للمورد'
            placeholder='اختر الملف'
            sizeWarn
          />
          {/* <Link
            className='bg-primary-main text-white flex gap-2 mx-auto items-center py-2 px-6 rounded-3xl min-w-[8rem] justify-center hover:text-primary-main hover:bg-transparent hover:border-primary-main border-transparent border w-max'
            to='step-two'
          >
            <span>التالي</span>
            <DownArrow className='rotate-90' />
          </Link> */}
        </div>
      </form>
    </section>
  );
};

export default PurchaseInfo;

const Detail = ({ q, value, terms }) => (
  <div>
    {terms ? (
      <p className='flex gap-4 items-center'>
        {q}
        <span className='underline text-bluish-main hover:no-underline text-xs'>
          تطبيق الشروط والأحكام
        </span>
      </p>
    ) : (
      <p className='text-sm'>{q}</p>
    )}
    <p className='text-lg text-primary-main'>{value}</p>
  </div>
);
