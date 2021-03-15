import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Octopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <p>A Octopus fornece os principais serviços para dar um UP na sua empresa!</p>
    </div>
  );
}
export default Home;
