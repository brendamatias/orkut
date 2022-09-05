import type { NextPage } from 'next';
import Head from 'next/head';
import Login from '../components/Login';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Orkut</title>
    </Head>

    <main>
      <Login />
    </main>
  </>
);

export default Home;
