import Head from 'next/head';
import Layout from '@/components/Layout';
import MovieDashboard from '@/components/MovieDashboard';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Movie Nexus - Discover Your Next Favorite Film</title>
        <meta name="description" content="Browse trending movies and get personalized recommendations" />
      </Head>
      <Layout>
        <PageTransition>
          <MovieDashboard />
        </PageTransition>
      </Layout>
    </>
  );
}