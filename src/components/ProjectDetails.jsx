import React from 'react';
import { AttachmentIcon, GrayDot } from '../utils/SVGs';

const ProjectDetails = () => {
  return (
    <section className='mt-8'>
      <h2 className='mb-4'>تفاصيل المشروع</h2>
      <div className='lg:flex gap-8 mb-10 space-y-8 lg:space-y-0'>
        <DetailsWrapper>
          <DetailsTitle>معلومات التمويل</DetailsTitle>
          <div className='flex flex-col gap-8 md:flex-row items-center'>
            <div className=''>
              <Detail
                className='basis-full '
                q='مبلغ المشتريات'
                value='100,000 ر.س'
                highlighted
                hideDot
              />
              <div className='flex flex-wrap justify-between gap-y-3 mt-3'>
                <Detail q='فترة السداد (شهر)' value='6' highlighted />
                <Detail q='فترة جمع الأموال (شهر)' value='2' highlighted />
                <Detail q='الرسوم الإدارية' value='20,000 ر.س' highlighted />
                <Detail q='هامش الربح' value='%13' highlighted />
              </div>
            </div>
            {/* <div className='h-[1px] w-full bg-text-300 md:hidden'></div> */}
            <div className='h-[1px] w-full bg-text-300 md:w-[1px] md:h-auto self-stretch'></div>
            {/* <div className='hidden md:block w-[1px] h-auto bg-text-300 self-stretch'></div> */}
            <div>
              <div className='flex flex-wrap justify-between gap-y-3 mb-3 bgre'>
                <Detail q='نوع التمويل' value='تمويل مشتريات' />
                <Detail q='نوع المشتريات' value='أجهزة آلية' />
                <Detail q='آلية التحصيل' value='حوالة بنكية' />
                <Detail q='نموذج/صيغة التمويل' value='مرابحة' />
              </div>
              <Detail q='الضمانات' value='ضمان شخصي بسند لأمر' />
            </div>
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <DetailsTitle>معلومات المورد</DetailsTitle>
          <div className='space-y-4'>
            <Detail q='اسم المورد' value='خديجة محمد' />
            <Detail q='القطاع' value='اسم القطاع' />
            <AttachmentLink>شهادة الحساب البنكي للمورد.pdf</AttachmentLink>
          </div>
        </DetailsWrapper>
      </div>
      <div className='lg:grid grid-cols-[1fr auto] gap-8 space-y-8  lg:space-y-0'>
        <DetailsWrapper className=''>
          <DetailsTitle>العقود والفواتير</DetailsTitle>
          <div className='flex flex-wrap gap-2'>
            <AttachmentLink>عرض السعر</AttachmentLink>
            <AttachmentLink>شهادة الحساب البنكي للمنشأة</AttachmentLink>
          </div>
        </DetailsWrapper>
        <DetailsWrapper className=''>
          <DetailsTitle>المرفقات</DetailsTitle>
          <div className='space-y-2'>
            <div className='flex flex-wrap gap-2'>
              <AttachmentLink>عرض السعر</AttachmentLink>
              <AttachmentLink>القوائم المالية</AttachmentLink>
              <AttachmentLink>الوثائق الداعمة</AttachmentLink>
            </div>
            <div className='flex flex-wrap gap-2'>
              <AttachmentLink>شهادة ضريبة القيمة المضافة</AttachmentLink>
              <AttachmentLink>شهادة الحساب البنكي للمنشأة</AttachmentLink>
            </div>
            <AttachmentLink wrap>كشف الحساب المصرفي لمدة 12 شهر</AttachmentLink>
          </div>
        </DetailsWrapper>
        <DetailsWrapper className='row-span-2 h-full col-start-2 row-start-1 '>
          <DetailsTitle>معلومات أخرى</DetailsTitle>
          <div className='space-y-4'>
            <Detail q='الأصول الحالية' value='499399943' />
            <Detail q='المطالبات الحالية' value='499399943' />
            <Detail q='الموقع الإلكتروني' value='example@example.com' />
            <Detail q='هل تود رهن الأصل؟' value='لا' />
            <Detail q='هل يوجد ضامن؟' value='لا' />
          </div>
        </DetailsWrapper>
      </div>
    </section>
  );
};

export default ProjectDetails;

const Detail = ({ q, value, highlighted, hideDot, className }) => (
  <div className={`basis-1/2 ${className}`}>
    <p className='text-gray-700 text-sm'>{q}</p>
    {highlighted ? (
      <div className='flex gap-1 items-center'>
        {!hideDot && <GrayDot />}
        <span className='text-primary-main font-bold text-xl'>{value}</span>
      </div>
    ) : (
      <p className='text-primary-main'>{value}</p>
    )}
  </div>
);

const DetailsWrapper = ({ children, className }) => (
  <div className={`border border-text-300 p-6 rounded-2xl ${className}`}>
    {children}
  </div>
);

const DetailsTitle = ({ children }) => (
  <h3 className='text-text-800 mb-3 font-semibold'>{children}</h3>
);

const AttachmentLink = ({ children, wrap }) => (
  <a
    href='#'
    className={`bg-bluish-light p-2 text-bluish-main ${
      wrap ? 'w-max' : ''
    } flex gap-1 items-center underline hover:no-underline rounded-md`}
  >
    <AttachmentIcon />
    <span>{children}</span>
  </a>
);
