import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>home</Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
          <span>test</span>
        </h1>
      </main>
    </div>
  );
};

export default Home;
