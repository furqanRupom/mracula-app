import * as React from 'react';
import Banner from '../../../components/home/Banner';
import ArticleSection from '../../../components/home/Article';
import NewsSection from '../../../components/home/News';
import ChallengeSection from '../../../components/home/Challenges';
import Footer from '../../../components/Shared/Footer';
import About from '../../../components/home/About';
import Navbar from '../../../components/Shared/Navbar';

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
