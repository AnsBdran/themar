import React from 'react';
import { tableData } from '../utils/_data';
import { DownArrow, PDF, UpDown, Upload } from '../utils/SVGs';

const Table = () => {
  return (
    <section className='mt-8'>
      <h2>جدول سداد الدفعات</h2>
      <div className='mb-4 mt-3 flex justify-end'>
        <button className='bg-primary-main text-white px-6 min-w-[6rem] py-2 rounded-3xl'>
          ادفع
        </button>
      </div>
      <div className='table-container'>
        <table className=''>
          <thead className='border-b border-gray-700'>
            <tr>
              <th className='border-gray-700 border-r border-gray-700'>
                المبلغ
                <UpDown />
              </th>
              <th>
                تاريخ السداد
                <UpDown />
              </th>

              <th>المرفقات (الإيصال)</th>
              <th>الفاتورة</th>
              <th className='border-l border-gray-700'>حالة الدفع</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10,000 ر.س</td>
              <td>13-4-2023</td>
              <td>
                <span>file name.pdf</span>
                <PDF />
              </td>
              <td>
                <span>file name.pdf</span>
                <PDF />
              </td>
              <td className='paid'>
                <span>مدفوعة</span>
              </td>
            </tr>
            <tr>
              <td>10,000 ر.س</td>
              <td>13-4-2023</td>
              <td>
                <span>file name.pdf</span>
                <PDF />
              </td>
              <td>
                <span>file name.pdf</span>
                <PDF />
              </td>
              <td className='paid'>
                <span>مدفوعة</span>
              </td>
            </tr>
            {/*  */}
            <tr>
              <td>10,000 ر.س</td>
              <td>13-4-2023</td>
              <td>
                <a href='#'>
                  <Upload />
                  <span>تحميل الملف</span>
                </a>
              </td>
              <td></td>
              <td className='late'>
                <span>متأخرة</span>
              </td>
            </tr>
            <tr>
              <td>10,000 ر.س</td>
              <td>13-4-2023</td>
              <td>
                <a href='#'>
                  <Upload />
                  <span>تحميل الملف</span>
                </a>
              </td>
              <td></td>
              <td className='not-paid'>
                <span>غير مدفوعة</span>
              </td>
            </tr>
            <tr>
              <td>10,000 ر.س</td>
              <td>13-4-2023</td>
              <td>
                <a href='#'>
                  <Upload />
                  <span>تحميل الملف</span>
                </a>
              </td>
              <td></td>
              <td className='not-paid'>
                <span>غير مدفوعة</span>
              </td>
            </tr>
            <tr>
              <td>10,000 ر.س</td>
              <td>13-4-2023</td>
              <td>
                <a href='#'>
                  <Upload />
                  <span>تحميل الملف</span>
                </a>
              </td>
              <td></td>
              <td className='not-paid'>
                <span>غير مدفوعة</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>100,000 ر.س (المبلغ الكلي)</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Table;
