import React from 'react';
import { Submitted } from '../../utils/SVGs';

const FormSubmitted = () => {
  return (
    <section className='min-h-[40vh] flex justify-center items-center'>
      <div className='flex flex-col items-center gap-8'>
        <Submitted />
        <h1 className='text-xl'>في انتظار موافقة المسؤولين</h1>
      </div>
    </section>
  );
};

export default FormSubmitted;
