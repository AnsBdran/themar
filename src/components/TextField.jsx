import React from 'react';
import { InfoFilled, Upload } from '../utils/SVGs';

const TextField = ({
  label,
  helperText,
  select,
  placeholder,
  children,
  sizeWarn,
}) => {
  const randomId = JSON.stringify(Math.random());
  const inputClasses =
    'bg-[#f1f1f1] border border-primary-main py-3 px-8 rounded-3xl focus:bg-transparent focus:border-primary-main w-full focus:outline-none';

  if (select)
    return (
      <div>
        <label className='block mb-3 text-text-800'>{label}</label>
        <select
          className='bg-[#f1f1f1] border border-primary-main py-3 px-4 rounded-3xl focus:bg-transparent focus:border-primary-main w-full'
          placeholder={placeholder}
        >
          {children}
        </select>
      </div>
    );

  return (
    <div>
      <label htmlFor={randomId} className='block mb-3 text-text-800'>
        {label}
      </label>
      {sizeWarn ? (
        <div className='relative'>
          <input
            type='text'
            className={inputClasses}
            placeholder='اختر الملف'
          />
          <button className='flex items-center left-0 top-0 bottom-0 rounded-3xl gap-2 absolute bg-primary-main text-white py-2 px-8'>
            <Upload />
            <span>تحميل الملف</span>
          </button>
        </div>
      ) : (
        <input
          type='text'
          id={randomId}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      {sizeWarn ? (
        <p className='flex items-center gap-1 mt-1 text-sm'>
          <InfoFilled />
          <span>يجب أن يكون ملفك بصيغة pdf، ولا يزيد حجمه عن 10 ميغابايت.</span>
        </p>
      ) : (
        <p className='text-sm mt-1'>{helperText}</p>
      )}
    </div>
  );
};

export default TextField;
