import React from 'react';
import { Crown, DotsListIcon, DownArrow } from '../utils/SVGs';
const Hero = () => {
  return (
    <section>
      <div className='pr-12 space-y-12'>
        {/* ==== crown and title === */}
        <div>
          <div className='relative'>
            <div className='absolute -right-14 mr-1 bg-indigo p-3 rounded-full'>
              <Crown />
            </div>
            <h1 className=' text-indigo'>ترقية الحساب</h1>
          </div>
          <p className='flex items-center text-indigo'>
            <span>استثماراتي</span>
            <DownArrow className='rotate-90' />
            <span className='text-text-400'>ترقية الحساب</span>
          </p>
        </div>
        {/* ======== figure section  ======= */}
        <figure>
          <figcaption className='font-bold text-blue-dark '>
            من هو المستثمر المحترف؟
          </figcaption>
          <blockquote className='pr-4 before:w-[5px] before:bg-indigo before:h-[105%] before:absolute relative before:rounded-xl before:right-0 flex mt-2 items-center border-indigo'>
            <p>
              هو الشخص الذي يملك خبرة واسعة في مجال الاستثمارات بشكل عام
              والأوراق المالية بشكل منتظم كما أنه ذو ملاءة مالية عالية. ولأن
              المستثمرين المحترفين يتقنون عمليات التحليل المالي فذلك يزيد
              احتمالية استلامهم لعوائد أعلى. عادة ما يطمح هذا النوع من
              المستثمرين لزيادة حجم العوائد المتوقعة وتنويع المحفظة الاستثمارية
              الخاصة بهم.
            </p>
          </blockquote>
        </figure>
      </div>
      {/* ========== Hero image ======== */}
      <div className='bg-hero mt-8 px-3 lg:pl-24 xl:pl-36 lg:h-72  rounded-3xl bg-cover bg-right flex items-center justify-end py-14 shadow-lg'>
        <div className='text-white space-y-1 text-right  flex-col'>
          <p>المستثمر المحترف يتمتع بعدة مزايا تنافسية</p>
          <ul className='leading-7 font-bold'>
            <ListItem className='hero-list-item'>
              عدم وجود حد أقصى على الاستثمارات الشهرية والسنوية
            </ListItem>
            <ListItem className='hero-list-item'>عوائد أعلى</ListItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const ListItem = ({ children }) => (
  <li className='flex items-center gap-1'>
    <DotsListIcon />
    <span>{children}</span>
  </li>
);
