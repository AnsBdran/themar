import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './layout';
import Home from '../routes/Home';
import Expenses from '../routes/Expenses';
import AddNewProject from '../routes/AddNewProject';
import Error404 from '../routes/404';
import PurchaseInfo from '../components/forms/PurchaseInfo';
import FinancialInfo from '../components/forms/FinancialInfo';
import FormSubmitted from '../components/forms/FormSubmitted';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error404 />}>
      <Route element={<Home />} index />
      <Route element={<Expenses />} path='expenses' />
      <Route element={<AddNewProject />} path='new-project'>
        <Route index element={<PurchaseInfo />} />
        <Route path='step-two' element={<FinancialInfo />} />
        <Route path='submit' element={<FormSubmitted />} />
      </Route>
    </Route>
  )
);

export default router;
