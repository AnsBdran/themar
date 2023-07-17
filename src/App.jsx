import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import router from './utils/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
