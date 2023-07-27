import React from 'react';
import Hero from '../components/Hero';
import { CircularListIcon, Cloud, SVG } from '../utils/SVGs';

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto '>
      <Hero />
      <section className='mt-8'>
        <p>
          بموجب تعليمات البنك المركزي السعودي فإنه يجب أن تنطبق عليك أحد الشروط
          التالية لتصنف كمستثمر محترف على منصة ثمار:
        </p>
        <ul className='mt-2 pr-2 space-y-2'>
          <ListItem>امتلاك أصول لا تقل عن ٣ ملايين ريال سعودي.</ListItem>
          <ListItem>
            خبرة سابقة أو حالية لمدة لا تقل عن ٣ سنوات في القطاع المالي.
          </ListItem>
          <ListItem>
            حاصل على شهادة مهنية معتمدة في الأوراق المالية محليًا أو دوليًا.
          </ListItem>
        </ul>
      </section>
      <section className='mt-10'>
        <p className='text-center text-text-500'>
          يمكنك ترقية نفسك كمستثمر محترف لتستثمر بلا حد أعلى من خلال إرفاق إحدى
          المتطلبات أعلاه
        </p>
        <div className='bg-gray-200 border border-dashed border-gray-700 mt-6 py-12 flex flex-col justify-center items-center gap-4 rounded-2xl'>
          <div className='flex flex-col items-center'>
            <Cloud />
            <p>قم بسحب الملف</p>
          </div>
          <p>أو</p>
          <button className='border border-indigo text-indigo hover:text-white hover:bg-indigo py-2 px-3 rounded-3xl'>
            تصفح وارفع الملف
          </button>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
        </div>
        <button className='mx-auto block bg-indigo hover:text-indigo hover:bg-transparent hover:border-indigo border border-transparent text-white px-3 py-2 rounded-3xl mt-8'>
          تأكيد طلب ترقية الحساب
        </button>
      </section>
    </div>
  );
};

export default Home;

const ListItem = ({ children }) => (
  <li className='flex items-center gap-1'>
    <CircularListIcon />
    <span>{children}</span>
  </li>
);
