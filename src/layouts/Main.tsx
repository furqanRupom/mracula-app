import * as React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router-dom';

interface IMainProps {
   
}

const Main: React.FunctionComponent<IMainProps> = () => {
    return <main className='font-baloo mx-auto bg-gradient-to-tr from-zinc-800 to-black'>
  <Navbar />

 <Outlet />

  <Footer />
  </main>;
};

export default Main;
