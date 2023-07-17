import React from 'react';
import PurchaseInfo from '../components/forms/PurchaseInfo';
import Breadcrumbs from '../components/forms/Breadcrumbs';
import FinancialInfo from '../components/forms/FinancialInfo';
import { Outlet } from 'react-router-dom';

const AddNewProject = () => {
  return (
    <>
      <section className='mb-8'>
        <h1 className='text-primary-main'>المشتريات</h1>
        <Breadcrumbs />
      </section>
      <section className='max-w-xl xl:max-w-2xl mx-auto'>
        <Outlet />
      </section>
    </>
  );
};

export default AddNewProject;
