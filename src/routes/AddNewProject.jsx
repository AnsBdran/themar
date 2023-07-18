import React from 'react';
import PurchaseInfo from '../components/forms/PurchaseInfo';
import Breadcrumbs from '../components/forms/Breadcrumbs';
import FinancialInfo from '../components/forms/FinancialInfo';
import { Outlet, useLocation } from 'react-router-dom';

const AddNewProject = () => {
  const location = useLocation();
  console.log('location', location);
  const isSubmitted = location.pathname === '/new-project/submit';
  return (
    <>
      {!isSubmitted && (
        <section className='mb-8'>
          <h1 className='text-primary-main'>المشتريات</h1>
          <Breadcrumbs />
        </section>
      )}
      <section className='max-w-xl xl:max-w-2xl mx-auto'>
        <Outlet />
      </section>
    </>
  );
};

export default AddNewProject;
