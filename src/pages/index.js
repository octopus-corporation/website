import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../components/Intro';
import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Octopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro/>
    </div>
  );
}
export default Home;
