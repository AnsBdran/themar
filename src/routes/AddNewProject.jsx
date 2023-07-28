import React from 'react';
import PurchaseInfo from '../components/forms/PurchaseInfo';
import Breadcrumbs from '../components/forms/Breadcrumbs';
import FinancialInfo from '../components/forms/FinancialInfo';
import { Outlet, useLocation } from 'react-router-dom';
import Stepper from 'awesome-react-stepper';
import FormSubmitted from '../components/forms/FormSubmitted';
import { DownArrow } from '../utils/SVGs';

const AddNewProject = () => {
  const location = useLocation();
  console.log('location', location);
  const showStpper = location.pathname === '/new-project/submit';
  return (
    <>
      <section className='mb-8 max-w-5xl mx-auto'>
        <div className=''>
          <h1 className='text-primary-main'>المشتريات</h1>
          <Breadcrumbs />
        </div>
        <section className='max-w-xl xl:max-w-2xl mx-auto mt-6'>
          <Stepper
            // strokeColor='#EBEBEB'
            fillStroke='#26B195'
            activeColor='#26B195'
            showProgressBar={!showStpper}
            // activeProgressBorder='3px solid #26B195'
            btnPos='center'
            stroke={3}
            continueBtn={
              <button
                className='bg-primary-main text-white flex gap-2 mx-auto
                items-center py-2 px-6 rounded-3xl min-w-[8rem] justify-center
                hover:text-primary-main hover:bg-transparent 
                hover:border-primary-main border-transparent border w-max'
              >
                <span>التالي</span>
                <DownArrow className='rotate-90' />
              </button>
            }
            backBtn={
              <button className='flex gap-2 items-center rounded-3xl py-2 px-6 hover:border-primary-main border border-transparent'>
                <DownArrow className='-rotate-90' />
                السابق
              </button>
            }
          >
            <PurchaseInfo />
            <FinancialInfo />
            <FormSubmitted />
          </Stepper>
        </section>
      </section>
    </>
  );
  // return (
  //   <>
  //     {!isSubmitted && (
  //       <section className='mb-8'>
  //         <h1 className='text-primary-main'>المشتريات</h1>
  //         <Breadcrumbs />
  //         <Stepper></Stepper>
  //       </section>
  //     )}
  //     <section className='max-w-xl xl:max-w-2xl mx-auto'>
  //       <Outlet />
  //     </section>
  //   </>
  // );
};

export default AddNewProject;
