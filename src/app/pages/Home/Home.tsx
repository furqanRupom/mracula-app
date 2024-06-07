import * as React from 'react';
import Banner from '../../../components/home/Banner';


interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <main className=''>
  <div className=''>
  <Banner />

  </div>

  </main>;
};

export default HomePage;
